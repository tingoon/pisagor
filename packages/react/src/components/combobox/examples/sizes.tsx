import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

function SizeExample({ size }: { size: "sm" | "md" | "lg" }) {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder={`Size ${size}`} size={size} />
      <Combobox.Content>
        <Combobox.List>
          {collection.items.map((item) => (
            <Combobox.Item item={item} key={item.value}>
              {item.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <SizeExample size="sm" />
      <SizeExample size="md" />
      <SizeExample size="lg" />
    </div>
  );
}
