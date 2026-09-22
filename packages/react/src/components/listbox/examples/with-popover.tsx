import { useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import { CaretUpDownIcon } from "@phosphor-icons/react";
import { Button, Input, Popover } from "@pisagor/react";
import { useState } from "react";
import { Listbox } from "..";
export function WithPopover() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
      { label: "Canada", value: "ca" },
    ],
  });

  const isEmpty = collection.items.length === 0 && search;

  return (
    <Listbox.Root
      collection={collection}
      onSelect={() => {
        setIsOpen(false);
      }}
    >
      <Popover onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
        <Popover.Trigger asChild>
          <Button className="justify-between" variant="outline">
            <Listbox.ValueText placeholder="Select framework" />
            <CaretUpDownIcon className="opacity-64" />
          </Button>
        </Popover.Trigger>
        <Popover.Content className="min-w-64 gap-2 p-1">
          <Input
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
              filter(value);
            }}
            placeholder="Search..."
            value={search}
          />
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}

            {isEmpty && <Listbox.Empty>No results found. Try a different search.</Listbox.Empty>}
          </Listbox.Content>
        </Popover.Content>
      </Popover>
    </Listbox.Root>
  );
}
