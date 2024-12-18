interface InputProps {
  // Core props
  id?: string; // Unique ID for the input
  name?: string; // Name for form submission
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'; // Input type
  value?: string | number; // Value of the input
  defaultValue?: string | number; // Default value for uncontrolled inputs
  placeholder?: string; // Placeholder text
  disabled?: boolean; // Disable the input
  readOnly?: boolean; // Make input read-only
  required?: boolean; // Make input required
  autoFocus?: boolean; // Automatically focus the input on mount
  maxLength?: number; // Maximum number of characters allowed
  minLength?: number; // Minimum number of characters required
  min?: number; // Minimum numeric value
  max?: number; // Maximum numeric value
  step?: number; // Step size for numeric inputs
  pattern?: string; // Regex pattern for validation
  autoComplete?: string; // Autocomplete attribute
  inputMode?: 'text' | 'numeric' | 'decimal' | 'email' | 'search' | 'tel' | 'url'; // Control the virtual keyboard on mobile devices

  // Accessibility props
  'aria-label'?: string; // Label for screen readers
  'aria-labelledby'?: string; // ID of an external label element
  'aria-describedby'?: string; // ID of an element describing the input
  'aria-invalid'?: boolean; // Indicate if the input is invalid
  'aria-required'?: boolean; // Indicate if the input is required
  'aria-disabled'?: boolean; // Indicate if the input is disabled

  // Event handlers
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Value change handler
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void; // Focus event handler
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Blur event handler
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Key press event handler
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Key down event handler
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Key up event handler

  // Styling props
  className?: string; // Custom CSS classes
  customStyles?: React.CSSProperties; // Inline styles
  width?: string | number; // Input width
  height?: string | number; // Input height
  padding?: string | number; // Input padding
  borderColor?: string; // Border color for custom styling

  // Additional props
  iconLeft?: JSX.Element; // Left-aligned icon
  iconRight?: JSX.Element; // Right-aligned icon
  label?: string; // Label for the input
  helperText?: string; // Text for guidance or validation
  errorMessage?: string; // Error message
}
