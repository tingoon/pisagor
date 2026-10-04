/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid/select";

export function Multiple() {
  const renderValue = (value: string[]) => {
    if (value.length === 0) {
      return "Select languages…";
    }

    const firstValue = value?.at(0) ?? "";
    const additionalValues =
      value.length > 1 ? ` (+${value.length - 1} more)` : "";

    return firstValue + additionalValues;
  };

  const collection = createListCollection({
    items: [
      { label: "JavaScript", value: "javascript" },
      { label: "TypeScript", value: "typescript" },
      { label: "Python", value: "python" },
      { label: "Rust", value: "rust" },
    ],
  });
  return (
    <Select.Root
      collection={collection}
      defaultValue={["javascript", "typescript"]}
      multiple
    >
      <Select.Trigger>
        <Select.ValueText class="capitalize">
          <Select.Context>{({ value }) => renderValue(value)}</Select.Context>
        </Select.ValueText>
      </Select.Trigger>
      <Select.Content>
        {collection.items.map((item) => (
          <Select.Item item={item}>{item.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
