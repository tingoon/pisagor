import { Input, type InputProps } from "@pisagor/react/input";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type InputControlProps = SetRequired<
  Omit<InputProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface TextFieldProps extends FieldPresentationProps, InputControlProps {
  name?: string;
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Component
export function TextField({
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
    >
      <Input
        {...inputProps}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={(event) => onValueChange(event.target.value)}
        {...(value !== undefined ? { value } : {})}
      />
    </FieldShell>
  );
}
// #endregion
