/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Item, Listbox } from "@pisagor/solid";
export function Disabled() {
  const collection = createListCollection({
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });
  return (
    <Item.Group variant="outline">
      <Item class="p-1">
        <Listbox.Root collection={collection} disabled>
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
  );
}
