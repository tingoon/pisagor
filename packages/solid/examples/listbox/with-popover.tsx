/** @jsxImportSource solid-js */

import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Button, Input, Listbox, Popover } from "@pisagor/solid";
import { CaretUpDownIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function WithPopover() {
  const [search, setSearch] = createSignal("");
  const [isOpen, setIsOpen] = createSignal(false);

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
      <Popover onOpenChange={({ open }) => setIsOpen(open)} open={isOpen()}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} class="justify-between" variant="outline">
              <Listbox.ValueText placeholder="Select framework" />
              <CaretUpDownIcon class="opacity-64" />
            </Button>
          )}
        />
        <Popover.Content class="min-w-64 gap-2 p-1">
          <Input
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
              filter(value);
            }}
            placeholder="Search..."
            value={search()}
          />
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}

            {isEmpty && (
              <Listbox.Empty>
                No results found. Try a different search().
              </Listbox.Empty>
            )}
          </Listbox.Content>
        </Popover.Content>
      </Popover>
    </Listbox.Root>
  );
}
