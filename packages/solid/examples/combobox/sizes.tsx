import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { For } from "solid-js";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

function SizeExample({ size }: { size: "sm" | "md" | "lg" }) {
  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder={`Size ${size}`} size={size} />
      <Combobox.Content>
        <Combobox.List>
          <For each={collection().items}>
            {(item) => <Combobox.Item item={item}>{item.label}</Combobox.Item>}
          </For>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <SizeExample size="sm" />
      <SizeExample size="md" />
      <SizeExample size="lg" />
    </div>
  );
}
