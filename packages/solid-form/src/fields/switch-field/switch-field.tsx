import { Field, Switch, type SwitchProps } from "@pisagor/solid";
import { Show, splitProps } from "solid-js";
import type { FieldPresentationProps } from "../../internal/field-shell";

// #region Types
type SwitchControlProps = Omit<
  SwitchProps,
  "checked" | "invalid" | "label" | "name" | "onValueChange"
>;

export interface SwitchFieldProps
  extends FieldPresentationProps,
    SwitchControlProps {
  orientation?: "horizontal" | "vertical" | "responsive";
  checked?: boolean;
  name?: string;
  onBlur?: () => void;
  onValueChange?: (value: boolean) => void;
}
// #endregion

// #region Component
export function SwitchField(props: SwitchFieldProps) {
  const [local, switchProps] = splitProps(props, [
    "orientation",
    "checked",
    "invalid",
    "name",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "onBlur",
    "onValueChange",
    "class",
  ]);
  const orientation = () => local.orientation ?? "horizontal";
  const hasLabel = () => Boolean(local.label ?? local.labelAccessory);

  return (
    <Field
      class={local.class}
      invalid={local.invalid}
      orientation={orientation()}
    >
      <Switch
        {...switchProps}
        {...(local.checked !== undefined ? { checked: local.checked } : {})}
        id={local.id}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={local.onValueChange}
      />
      <Show when={hasLabel() || local.description}>
        <Field.Content>
          <Show when={hasLabel()}>
            <Field.Label
              {...local.labelProps}
              {...(local.id != null ? { for: local.id } : {})}
            >
              {local.label}
              {local.labelAccessory}
            </Field.Label>
          </Show>
          <Show when={local.description}>
            <Field.Description>{local.description}</Field.Description>
          </Show>
        </Field.Content>
      </Show>
      <Show when={local.error}>
        <Field.Error>{local.error}</Field.Error>
      </Show>
    </Field>
  );
}
// #endregion
