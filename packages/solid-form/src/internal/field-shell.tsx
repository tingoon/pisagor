import { Field, type FieldLabelProps, type FieldProps } from "@pisagor/solid";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";

export interface FieldPresentationProps {
  orientation?: FieldProps["orientation"];
  id?: string;
  invalid?: boolean;
  description?: JSX.Element;
  error?: JSX.Element;
  label?: JSX.Element;
  labelAccessory?: JSX.Element;
  class?: string;
  labelProps?: Omit<FieldLabelProps, "children">;
}

interface FieldShellProps extends FieldPresentationProps {
  children: JSX.Element;
}

export function FieldShell(props: FieldShellProps) {
  const [local] = splitProps(props, [
    "orientation",
    "id",
    "invalid",
    "children",
    "description",
    "error",
    "label",
    "labelAccessory",
    "class",
    "labelProps",
  ]);

  const hasLabel = () => Boolean(local.label || local.labelAccessory);

  return (
    <Field
      class={local.class}
      invalid={local.invalid}
      orientation={local.orientation}
    >
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
      {local.children}
      <Show when={local.error}>
        <Field.Error>{local.error}</Field.Error>
      </Show>
    </Field>
  );
}
