import {
  createListCollection,
  Select,
  type SelectRootProps,
} from "@pisagor/solid";
import { createMemo, For, splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../internal/field-shell";

// #region Types
interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps
  extends FieldPresentationProps,
    Omit<
      SelectRootProps,
      "children" | "collection" | "invalid" | "name" | "onValueChange" | "value"
    > {
  name?: string;
  value?: string;
  items: Array<SelectOption | string>;
  placeholder?: string;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function SelectField(props: SelectFieldProps) {
  const [local, selectProps] = splitProps(props, [
    "orientation",
    "id",
    "invalid",
    "name",
    "value",
    "description",
    "error",
    "items",
    "label",
    "labelAccessory",
    "placeholder",
    "onBlur",
    "onValueChange",
    "class",
    "labelProps",
  ]);

  const normalizedItems = createMemo(() =>
    local.items.map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
  );
  const collection = createMemo(() =>
    createListCollection({ items: normalizedItems() }),
  );
  const placeholder = () => local.placeholder ?? "Select an option";

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
      orientation={local.orientation}
    >
      <Select.Root
        {...selectProps}
        {...(local.value !== undefined
          ? { value: local.value ? [local.value] : [] }
          : {})}
        collection={collection()}
        invalid={local.invalid}
        name={local.name}
        onFocusOutside={local.onBlur}
        onValueChange={(nextValue) => {
          local.onValueChange?.(
            Array.isArray(nextValue) ? (nextValue.at(0) ?? "") : nextValue,
          );
        }}
      >
        <Select.Trigger id={local.id}>
          <Select.ValueText placeholder={placeholder()} />
        </Select.Trigger>
        <Select.Content>
          <For each={normalizedItems()}>
            {(item) => <Select.Item item={item}>{item.label}</Select.Item>}
          </For>
        </Select.Content>
      </Select.Root>
    </FieldShell>
  );
}
// #endregion
