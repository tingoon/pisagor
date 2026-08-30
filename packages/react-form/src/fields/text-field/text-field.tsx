import type { InputProps } from "@pisagor/react";
import { Input } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type InputControlProps = SetRequired<
  Omit<InputProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface TextFieldProps extends FieldPresentationProps, InputControlProps {
  name?: string;
  value?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function TextField({
  orientation,
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
  ...inputProps
}: TextFieldProps) {
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
      <Input
        {...inputProps}
        {...(value !== undefined ? { value } : {})}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </FieldShell>
  );
}
// #endregion
