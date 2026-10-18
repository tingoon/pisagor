import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Input, Item, Listbox } from "@pisagor/solid";
import { createSignal, For } from "solid-js";
export function WithFilter() {
  const [search, setSearch] = createSignal("");

  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });

  const isEmpty = () => collection().items.length === 0 && search();

  return (
    <Item.Group variant="outline">
      <Item class="flex flex-col gap-2 p-1">
        <Input
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            filter(value);
          }}
          placeholder="Search..."
          value={search()}
        />
        <Listbox.Root collection={collection()}>
          <Listbox.Content>
            <For each={collection().items}>
              {(item) => (
                <Listbox.Item item={item}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              )}
            </For>

            {isEmpty() && (
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
