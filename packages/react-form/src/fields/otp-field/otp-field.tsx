import type { InputOTPProps } from "@pisagor/react";
import { InputOTP } from "@pisagor/react";
import type { ReactNode } from "react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

// #region Types
export interface OtpFieldProps
  extends FieldPresentationProps,
    Omit<InputOTPProps, "children" | "invalid" | "onValueChange" | "value" | "name" | "onBlur"> {
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  value?: string;
  /**
   * Number of OTP digits.
   *
   * @defaultValue 6
   */
  length?: number;
}
// #endregion

// #region Component
export function OtpField({
  className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  length = 6,
  name,
  onBlur,
  onValueChange,
  value,
  ...inputOtpProps
}: OtpFieldProps) {
  const separatorAt = length > 1 ? Math.floor(length / 2) : -1;

  const slots: ReactNode[] = [];
  for (let index = 0; index < length; index += 1) {
    if (index === separatorAt) {
      slots.push(<InputOTP.Separator key={`otp-separator-${index}`} />);
    }
    slots.push(<InputOTP.Slot index={index} key={`otp-slot-${index}`} />);
  }

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
      <InputOTP
        {...inputOtpProps}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={(nextValue) => onValueChange(nextValue.join(""))}
        {...(value !== undefined ? { value: value ? value.split("") : [] } : {})}
      >
        {slots}
      </InputOTP>
    </FieldShell>
  );
}
// #endregion
