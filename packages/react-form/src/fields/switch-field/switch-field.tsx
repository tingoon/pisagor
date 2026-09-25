import type { SwitchProps } from "@pisagor/react";
import { Field, Switch } from "@pisagor/react";
import type { FieldPresentationProps } from "../../internal/field-shell";

// #region Types
type SwitchControlProps = Omit<
  SwitchProps,
  "checked" | "invalid" | "label" | "name"
>;

export interface SwitchFieldProps
  extends FieldPresentationProps,
    SwitchControlProps {
  orientation?: "horizontal" | "vertical" | "responsive";
  checked?: boolean;
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function SwitchField({
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
  onValueChange,
  className,
  ...switchProps
}: SwitchFieldProps) {
  const hasLabel = Boolean(label ?? labelAccessory);

  return (
    <Field className={className} invalid={invalid} orientation={orientation}>
      <Switch
        {...switchProps}
        {...(checked !== undefined ? { checked } : {})}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
      />
      {hasLabel || description ? (
        <Field.Content>
          {hasLabel ? (
            <Field.Label {...labelProps} htmlFor={id}>
              {label}
              {labelAccessory}
            </Field.Label>
          ) : null}
          {description ? (
            <Field.Description>{description}</Field.Description>
          ) : null}
        </Field.Content>
      ) : null}
      {error ? <Field.Error>{error}</Field.Error> : null}
    </Field>
  );
}
// #endregion
