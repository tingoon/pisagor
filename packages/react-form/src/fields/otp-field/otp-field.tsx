import type { InputOTPProps } from "@pisagor/react";
import { InputOTP } from "@pisagor/react";
import type { ReactNode } from "react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

// #region Types
export interface OtpFieldProps
  extends FieldPresentationProps,
    Omit<InputOTPProps, "children" | "invalid" | "onValueChange" | "value" | "name" | "onBlur"> {
  /**
   * Number of OTP digits.
   *
   * @defaultValue 6
   */
  length?: number;
  name?: string;
  value?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
}
// #endregion

// #region Part
export function OtpField({
  invalid,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  length = 6,
  onBlur,
  onValueChange,
  className,
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
        {...(value !== undefined ? { value: value ? value.split("") : [] } : {})}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={(nextValue) => onValueChange(nextValue.join(""))}
      >
        {slots}
      </InputOTP>
    </FieldShell>
  );
}
// #endregion
