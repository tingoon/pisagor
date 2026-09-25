import { useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import { Input, Item } from "@pisagor/react";
import { useState } from "react";
import { Listbox } from "..";
export function WithFilter() {
  const [search, setSearch] = useState("");

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });

  const isEmpty = collection.items.length === 0 && search;

  return (
    <Item.Group variant="outline">
      <Item className="flex flex-col gap-2 p-1">
        <Input
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            filter(value);
          }}
          placeholder="Search..."
          value={search}
        />
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}

            {isEmpty && (
              <Listbox.Empty>
                No results found. Try a different search.
              </Listbox.Empty>
            )}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
  );
}
