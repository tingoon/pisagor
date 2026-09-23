import { createListCollection } from "@ark-ui/react";
import { Item } from "@pisagor/react";
import { Listbox } from "..";
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
      <Item className="p-1">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
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
