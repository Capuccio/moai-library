export type TApiResponse<T> = {
  meta: T;
  attributes: T;
  encrypted: boolean;
  reference: string;
  source: TSource;
  status: TStatus;
};

type TSource = {
  controller: string;
  method: string;
  url: string;
};

type TStatus = {
  code: number;
  type: string;
  method: string;
  message: TMessage;
};

type TMessage = {
  title: string;
  detail: string[];
};
