import type { TextareaProps } from "@pisagor/react";
import { Textarea } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type TextareaControlProps = SetRequired<
  Omit<TextareaProps, "name" | "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface TextareaFieldProps extends FieldPresentationProps, TextareaControlProps {
  name?: string;
  value?: string;
  onBlur?: () => void;
}
// #endregion

// #region Part
export function TextareaField({
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
      orientation={orientation}
    >
      <Textarea
        {...textareaProps}
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
