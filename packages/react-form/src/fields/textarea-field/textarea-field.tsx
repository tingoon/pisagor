import { Textarea, type TextareaProps } from "@pisagor/react/textarea";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type TextareaControlProps = SetRequired<
  Omit<TextareaProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface TextareaFieldProps extends FieldPresentationProps, TextareaControlProps {
  name?: string;
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Component
export function TextareaField({
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
  ...textareaProps
}: TextareaFieldProps) {
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
      <Textarea
        {...textareaProps}
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
