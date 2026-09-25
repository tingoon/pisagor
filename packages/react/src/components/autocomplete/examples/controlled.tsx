import { useFilter, useListCollection } from "@ark-ui/react";
import { useState } from "react";
import { Autocomplete } from "..";

export function Controlled() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];
  const [value, setValue] = useState<string | undefined>("banana");

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div className="flex flex-col gap-2">
      <Autocomplete.Root
        className="w-full"
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(value) => setValue(value.at(0))}
        value={value ? [value] : []}
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
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
      <p className="text-center text-muted-foreground text-sm">
        Selected: {value ?? "(none)"}
      </p>
    </div>
  );
}
