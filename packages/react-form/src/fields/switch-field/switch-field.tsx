import type { SwitchProps } from "@pisagor/react";
import { Field, Switch } from "@pisagor/react";
import type { FieldPresentationProps } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type SwitchControlProps = SetRequired<
  Omit<SwitchProps, "checked" | "invalid" | "label" | "name">,
  "onValueChange"
>;

export interface SwitchFieldProps extends FieldPresentationProps, SwitchControlProps {
  checked?: boolean;
  name?: string;
  onBlur?: () => void;
  orientation?: "horizontal" | "vertical" | "responsive";
}
// #endregion

// #region Part
export function SwitchField({
  checked,
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
  orientation = "horizontal",
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
          {description ? <Field.Description>{description}</Field.Description> : null}
        </Field.Content>
      ) : null}
      {error ? <Field.Error>{error}</Field.Error> : null}
    </Field>
  );
}
// #endregion
