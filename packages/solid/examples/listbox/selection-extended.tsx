/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Item, Kbd, Listbox } from "@pisagor/solid";
export function SelectionExtended() {
  const collection = createListCollection({
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });
  return (
    <div class="flex flex-col gap-2">
      <p class="text-center text-muted-foreground text-sm">
        Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
      </p>
      <Item.Group variant="outline">
        <Item class="w-full p-1">
          <Listbox.Root collection={collection} selectionMode="extended">
            <Listbox.Content>
              {collection.items.map((item) => (
                <Listbox.Item item={item}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              ))}
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
    </div>
  );
}
