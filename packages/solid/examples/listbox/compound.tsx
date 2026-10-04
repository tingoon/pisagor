/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Listbox } from "@pisagor/solid";
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
          <Listbox.Item item={item}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
}
