/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Item } from "@pisagor/solid";
import { Listbox } from "@pisagor/solid/listbox";
export function Grouping() {
  const collection = createListCollection({
    groupBy: (item) => (item as { region: string }).region,
    items: [
      { label: "Brazil", region: "South America", value: "br" },
      { label: "Colombia", region: "South America", value: "co" },
      { label: "Mexico", region: "North America", value: "mx" },
      { label: "Canada", region: "North America", value: "ca" },
    ],
  });
  return (
    <Item.Group variant="outline">
      <Item class="p-1">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.group().map(([region, items]) => (
              <Listbox.ItemGroup>
                <Listbox.ItemGroupLabel>{region}</Listbox.ItemGroupLabel>
                {items.map((item) => (
                  <Listbox.Item item={item}>
                    <Listbox.ItemText>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.ItemGroup>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
  );
}
