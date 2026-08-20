import { PhoneInput, type PhoneInputProps } from "@pisagor/react/phone-input";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

// #region Types
export interface PhoneFieldProps
  extends FieldPresentationProps,
    Omit<PhoneInputProps, "name" | "onBlur" | "onChange" | "value"> {
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  value?: string;
}
// #endregion

// #region Part
export function PhoneField({
  className,
  defaultCountry,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  value,
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
    >
      <PhoneInput
        {...phoneInputProps}
        defaultCountry={defaultCountry}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onChange={onValueChange}
        {...(value !== undefined ? { value } : {})}
      />
    </FieldShell>
  );
}
// #endregion
