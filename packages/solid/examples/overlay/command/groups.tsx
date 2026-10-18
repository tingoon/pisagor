import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Command } from "@pisagor/solid";
import { For } from "solid-js";

export function Groups() {
  const initialItems = [
    { group: "Fruit", label: "Apple", value: "apple" },
    { group: "Fruit", label: "Banana", value: "banana" },
    { group: "Fruit", label: "Cherry", value: "cherry" },
    { group: "Countries", label: "United States", value: "us" },
    { group: "Countries", label: "United Kingdom", value: "uk" },
    { group: "Countries", label: "Germany", value: "de" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Command.Input placeholder="Search..." />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          <For each={collection().group()}>
            {([group, items], index) => (
              <>
                {index() !== 0 && <Command.Separator />}
                <Command.ItemGroup heading={group}>
                  <For each={items}>
                    {(item) => (
                      <Command.Item item={item}>{item.label}</Command.Item>
                    )}
                  </For>
                </Command.ItemGroup>
              </>
            )}
          </For>
        </Command.List>
      </Command.Content>
    </Command>
  );
}
