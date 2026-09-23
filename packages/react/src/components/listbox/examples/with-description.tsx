import { createListCollection } from "@ark-ui/react";
import { Item } from "@pisagor/react";
import { Listbox } from "..";
export function WithDescription() {
  const collection = createListCollection({
    items: [
      {
        description: "South America's country, Portuguese speaking.",
        label: "Brazil",
        value: "br",
      },
      {
        description: "North America's country, Spanish speaking.",
        label: "Mexico",
        value: "mx",
      },
      {
        description: "Europe's country, Irish/English speaking.",
        label: "Ireland",
        value: "ie",
      },
    ],
  });
  return (
    <Item.Group variant="outline">
      <Item className="p-1">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">{item.description}</span>
                </div>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
  );
}
