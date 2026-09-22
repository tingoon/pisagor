import { createListCollection } from "@ark-ui/react";
import { Item } from "@pisagor/react";
import { Listbox } from "..";
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
      <Item className="p-1">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
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
