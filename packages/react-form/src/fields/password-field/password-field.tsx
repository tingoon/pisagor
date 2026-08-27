import type { PasswordInputProps } from "@pisagor/react";
import { PasswordInput } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type PasswordInputControlProps = SetRequired<
  Omit<PasswordInputProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface PasswordFieldProps extends FieldPresentationProps, PasswordInputControlProps {
  name?: string;
  value?: string;
  onBlur?: () => void;
}
// #endregion

// #region Part
export function PasswordField({
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
  ...passwordInputProps
}: PasswordFieldProps) {
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
      <PasswordInput
        {...passwordInputProps}
        {...(value !== undefined ? { value } : {})}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
