import type { CheckboxProps } from "@pisagor/react";
import { Checkbox, Field } from "@pisagor/react";
import type { FieldPresentationProps } from "../../internal/field-shell";

// #region Types
export interface CheckboxFieldProps
  extends FieldPresentationProps,
    Omit<CheckboxProps, "checked" | "invalid" | "name" | "onCheckedChange" | "onValueChange"> {
  orientation?: "horizontal" | "vertical" | "responsive";
  checked?: boolean;
  name?: string;
  onBlur?: () => void;
  onCheckedChange: (checked: boolean) => void;
}
// #endregion

// #region Part
export function CheckboxField({
  orientation = "horizontal",
  checked,
  invalid,
  name,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  onBlur,
  onCheckedChange,
  className,
  ...checkboxProps
}: CheckboxFieldProps) {
  const hasLabel = Boolean(label ?? labelAccessory);

  return (
    <Field className={className} invalid={invalid} orientation={orientation}>
      <Checkbox
        {...checkboxProps}
        {...(checked !== undefined ? { checked } : {})}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onCheckedChange={(details) => onCheckedChange(details.checked === true)}
      />
      {hasLabel || description ? (
        <Field.Content>
          {hasLabel ? (
            <Field.Label {...labelProps} htmlFor={id}>
              {label}
              {labelAccessory}
            </Field.Label>
          ) : null}
          {description ? <Field.Description>{description}</Field.Description> : null}
        </Field.Content>
      ) : null}
      {error ? <Field.Error>{error}</Field.Error> : null}
    </Field>
  );
}
// #endregion
