import { createListCollection } from "@ark-ui/react";
import { useState } from "react";
import { Select } from "..";

export function MaxSelection() {
  const MAX_SELECTION = 3;
  const renderValue = (value: string[]) => {
    if (value.length === 0) {
      return "Select 3 frameworks";
    }

    const firstValue = value?.at(0) ?? "";
    const additionalValues = value.length > 1 ? ` (+${value.length - 1} more)` : "";

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
  const [value, setValue] = useState<string[]>([]);

  const handleValueChange = (newValue: string | string[]) => {
    const values = Array.isArray(newValue) ? newValue : [newValue];
    setValue(values.slice(0, MAX_SELECTION));
  };

  return (
    <Select.Root collection={collection} multiple onValueChange={handleValueChange} value={value}>
      <Select.Trigger>
        <Select.ValueText className="capitalize">
          <Select.Context>{({ value }) => renderValue(value)}</Select.Context>
        </Select.ValueText>
      </Select.Trigger>
      <Select.Content>
        {collection.items.map((item) => (
          <Select.Item item={item} key={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
