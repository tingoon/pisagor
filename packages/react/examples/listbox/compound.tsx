import { createListCollection } from "@ark-ui/react";
import { Listbox } from "@pisagor/react/listbox";
export function Compound() {
  const collection = createListCollection({
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });
  return (
    <Listbox.Root collection={collection} defaultValue={["br"]}>
      <Listbox.Content>
        {collection.items.map((item) => (
          <Listbox.Item item={item} key={item.value}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
}
