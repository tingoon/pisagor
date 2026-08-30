import type { SwitchProps } from "../../../components";
import { Field, Switch } from "../../../components";
import type { FieldPresentationProps } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type SwitchControlProps = SetRequired<
  Omit<SwitchProps, "checked" | "invalid" | "label" | "name">,
  "onValueChange"
>;

export interface SwitchFieldProps extends FieldPresentationProps, SwitchControlProps {
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
          {description ? <Field.Description>{description}</Field.Description> : null}
        </Field.Content>
      ) : null}
      {error ? <Field.Error>{error}</Field.Error> : null}
    </Field>
  );
}
// #endregion
