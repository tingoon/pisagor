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
  name?: string;
  value?: string;
  items: Array<SelectOption | string>;
  placeholder?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
}
// #endregion

// #region Part
export function SelectField({
  orientation,
  id,
  invalid,
  name,
  value,
  description,
  error,
  items,
  label,
  labelAccessory,
  placeholder = "Select an option",
  onBlur,
  onValueChange,
  className,
  labelProps,
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
      orientation={orientation}
    >
      <Select.Root
        {...selectProps}
        {...(value !== undefined ? { value: value ? [value] : [] } : {})}
        collection={collection}
        invalid={invalid}
        name={name}
        onFocusOutside={onBlur}
        onValueChange={(nextValue) => {
          onValueChange(Array.isArray(nextValue) ? (nextValue.at(0) ?? "") : nextValue);
        }}
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
