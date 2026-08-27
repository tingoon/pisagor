import { createListCollection, Select, type SelectRootProps } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

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
  items: Array<SelectOption | string>;
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  placeholder?: string;
  value?: string;
}
// #endregion

// #region Part
export function SelectField({
  className,
  description,
  error,
  id,
  invalid,
  items,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  placeholder = "Select an option",
  value,
  ...selectProps
}: SelectFieldProps) {
  const normalizedItems = items.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item,
  );
  const collection = createListCollection({ items: normalizedItems });

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
      <Select.Root
        {...selectProps}
        collection={collection}
        invalid={invalid}
        name={name}
        onFocusOutside={onBlur}
        onValueChange={(nextValue) => {
          onValueChange(Array.isArray(nextValue) ? (nextValue.at(0) ?? "") : nextValue);
        }}
        {...(value !== undefined ? { value: value ? [value] : [] } : {})}
      >
        <Select.Trigger className="w-full" id={id}>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.Content>
          {normalizedItems.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </FieldShell>
  );
}
// #endregion
