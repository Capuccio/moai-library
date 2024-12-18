import { colorButton, oldVariantType, sizeButton } from './Button.styles';

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  variantType?: 'squared' | 'rounded';
  radius?: 'sm' | 'md' | 'lg' | 'full';
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  customstyles?: string;
}

const Button = ({ color = 'primary', size = 'md', variantType = 'squared', disabled = false, ...props }: ButtonProps) => {
  const buttonsClass = [
    colorButton[color],
    sizeButton[size],
    oldVariantType[variantType],
    props.customstyles,
    'cursor-pointer transition-opacity duration-400 hover:opacity-90 w-full',
    disabled && 'opacity-50 cursor-default disabled:hover:opacity-50'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...props} className={buttonsClass} disabled={disabled}>
      {props.children}
    </button>
  );
};

export default Button;
