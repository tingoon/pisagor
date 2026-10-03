/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Item } from "@pisagor/solid";
import { Listbox } from "@pisagor/solid/listbox";
export function WithIcon() {
  const collection = createListCollection({
    items: [
      { icon: "🇧🇷", label: "Brazil", value: "brazil" },
      { icon: "🇲🇽", label: "Mexico", value: "mexico" },
      { icon: "🇮🇪", label: "Ireland", value: "ireland" },
    ],
  });
  return (
    <Item.Group variant="outline">
      <Item class="p-1">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item}>
                {item.icon}
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
