import { useFilter, useListCollection } from "@ark-ui/react";
import { useState } from "react";
import { Combobox } from "..";

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
      <Combobox.Root
        className="w-full"
        collection={collection}
        inputValue={value}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(value) => setValue(value[0])}
      >
        <Combobox.Input placeholder="Select a fruit..." />
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
      <p className="text-center text-muted-foreground text-sm">Selected: {value ?? "(none)"}</p>
    </div>
  );
}
