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
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Component
export function PasswordField({
  className,
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
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
        {...(value !== undefined ? { value } : {})}
      />
    </FieldShell>
  );
}
// #endregion
