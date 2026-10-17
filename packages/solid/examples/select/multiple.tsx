import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid";
import { For } from "solid-js";

export function Multiple() {
  const renderValue = (value: string[]) => {
    if (value.length === 0) {
      return "Select languages…";
    }

    const firstValue = value.at(0) ?? "";
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
          <Select.Context>{(api) => renderValue(api().value)}</Select.Context>
        </Select.ValueText>
      </Select.Trigger>
      <Select.Content>
        <For each={collection.items}>
          {(item) => <Select.Item item={item}>{item.label}</Select.Item>}
        </For>
      </Select.Content>
    </Select.Root>
  );
}
