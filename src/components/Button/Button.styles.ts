import { ButtonProps } from './Button.component';

export const colorButton: Record<string, string> = {
  primary: 'bg-[#002e62] text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  danger: 'bg-red-500 text-white'
};

export const sizeButton: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-tiny px-3 h-8',
  md: 'text-small px-4 h-10',
  lg: 'text-medium px-4 h-12'
};

export const radiusMap: Record<string, string> = {
  squared: 'rounded-none',
  rounded: 'rounded-lg'
};

export const borderWidthMap: Record<string, string> = {
  none: 'border-0',
  light: 'border',
  normal: 'border-2',
  bold: 'border-4'
};

// WILL DEPRECATE
export const oldVariantType: Record<string, string> = {
  squared: 'rounded-none',
  rounded: 'rounded-lg'
};
