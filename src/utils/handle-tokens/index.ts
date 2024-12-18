import { createDecipheriv, createCipheriv, randomBytes } from "node:crypto";
import { DecryptToken } from "./types";

export const handleDecodeToken = ({ token, secret }: { token: string; secret: string }): DecryptToken | void => {
  try {
    const key = Buffer.from(secret as string, 'base64');
    const data = Buffer.from(token, 'base64');
    const iv = data.subarray(0, 16);
    const cipherText = data.subarray(16);

    const decrypt = (data: Buffer): string => {
      const decipher = createDecipheriv('aes-256-cbc', key, iv);
      const decrypted = decipher.update(data, undefined, 'utf8') + decipher.final('utf8');

      return decrypted;
    };

    const cryptResponse = decrypt(cipherText);
    const decryptedResponse = JSON.parse(cryptResponse);

    return decryptedResponse;
  } catch (error) {
    console.error('error decrypting data:', error);
  }
};

export const handleEncodeToken = ({ data, secret }: { data: unknown; secret: string }): string => {
  try {
    const method = 'aes-256-cbc';

    const key = Buffer.from(secret, 'base64');

    const ivSize = 16;
    const ivData = randomBytes(ivSize);

    const cipher = createCipheriv(method, key, ivData);

    const dataString = JSON.stringify(data);

    let encData = cipher.update(dataString, 'utf8', 'base64');
    encData += cipher.final('base64');

    const output = Buffer.concat([ivData, Buffer.from(encData, 'base64')]).toString('base64');

    return output;
  } catch (error) {
    throw new Error(`Error encoding data: ${error}`);
  }
};
