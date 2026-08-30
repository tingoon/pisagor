import { PhoneInput, type PhoneInputProps } from "../../../phone-input";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

// #region Types
export interface PhoneFieldProps
  extends FieldPresentationProps,
    Omit<PhoneInputProps, "name" | "onBlur" | "onChange" | "value"> {
  name?: string;
  value?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
}
// #endregion

// #region Component
export function PhoneField({
  orientation,
  defaultCountry,
  invalid,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  onBlur,
  onValueChange,
  className,
  ...phoneInputProps
}: PhoneFieldProps) {
  return (
    <FieldShell
      className={className}
      description={description}
      error={error}
      id={id}
      invalid={invalid}
      label={label}
      labelAccessory={labelAccessory}
      labelProps={labelProps}
      orientation={orientation}
    >
      <PhoneInput
        {...phoneInputProps}
        {...(value !== undefined ? { value } : {})}
        defaultCountry={defaultCountry}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onChange={onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
