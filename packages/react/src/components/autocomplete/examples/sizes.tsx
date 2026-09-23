import { useFilter, useListCollection } from "@ark-ui/react";
import { Autocomplete } from "..";

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
    <Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input clearable placeholder={`Size ${size}`} size={size} />
      <Autocomplete.Content>
        <Autocomplete.Empty />
        <Autocomplete.List>
          {collection.items.map((item) => (
            <Autocomplete.Item item={item} key={item.value}>
              {item.label}
            </Autocomplete.Item>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
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
