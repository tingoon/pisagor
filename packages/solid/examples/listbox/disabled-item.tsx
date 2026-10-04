/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Item } from "@pisagor/solid";
import { Listbox } from "@pisagor/solid/listbox";
export function DisabledItem() {
  const collection = createListCollection({
    items: [
      { label: "Free", value: "free" },
      { label: "Pro", value: "pro" },
      {
        disabled: true,
        label: "Enterprise",
        value: "enterprise",
      },
      { label: "Custom", value: "custom" },
    ],
  });
  return (
    <Item.Group variant="outline">
      <Item class="p-1">
        <Listbox.Root collection={collection}>
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
