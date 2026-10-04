import { Field, RadioGroup, type RadioGroupRootProps } from "@pisagor/solid";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import type { FieldPresentationProps } from "../../internal/field-shell";

// #region Types
interface RadioGroupOption {
  description?: JSX.Element;
  label: JSX.Element;
  value: string;
}

export interface RadioGroupFieldProps
  extends Omit<FieldPresentationProps, "orientation">,
    Omit<RadioGroupRootProps, "invalid" | "name" | "onValueChange" | "value"> {
  name?: string;
  value?: string;
  options: Array<RadioGroupOption | string>;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function RadioGroupField(props: RadioGroupFieldProps) {
  const [local, radioGroupProps] = splitProps(props, [
    "orientation",
    "invalid",
    "name",
    "value",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "options",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  const normalizedOptions = createMemo(() =>
    local.options.map((option) =>
      typeof option === "string" ? { label: option, value: option } : option,
    ),
  );
  const hasLabel = () => Boolean(local.label ?? local.labelAccessory);

  return (
    <Field.Set
      class={local.class}
      data-invalid={local.invalid || undefined}
      invalid={local.invalid}
    >
      <Show when={hasLabel()}>
        <Field.Legend
          class={local.labelProps?.class}
          id={local.id}
          variant="label"
        >
          {local.label}
          {local.labelAccessory}
        </Field.Legend>
      </Show>
      <Show when={local.description}>
        <Field.Description>{local.description}</Field.Description>
      </Show>
      <RadioGroup.Root
        {...radioGroupProps}
        {...(local.value !== undefined ? { value: local.value || null } : {})}
        aria-labelledby={hasLabel() && local.id ? local.id : undefined}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={(nextValue) => local.onValueChange?.(nextValue ?? "")}
        orientation={local.orientation}
      >
        <For each={normalizedOptions()}>
          {(option) => {
            const optionId = local.id
              ? `${local.id}-${option.value}`
              : undefined;
            return (
              <Show
                fallback={
                  <RadioGroup.Item id={optionId} value={option.value}>
                    {option.label}
                  </RadioGroup.Item>
                }
                when={option.description}
              >
                <Field>
                  <RadioGroup.Item id={optionId} value={option.value}>
                    {option.label}
                  </RadioGroup.Item>
                  <Field.Description>{option.description}</Field.Description>
                </Field>
              </Show>
            );
          }}
        </For>
      </RadioGroup.Root>
      <Show when={local.error}>
        <Field invalid={local.invalid}>
          <Field.Error>{local.error}</Field.Error>
        </Field>
      </Show>
    </Field.Set>
  );
}
// #endregion
