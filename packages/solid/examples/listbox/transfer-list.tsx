/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Button, Item, Listbox } from "@pisagor/solid";
import { CaretLeftIcon, CaretRightIcon } from "@pisagor/solid/icons";
import { createMemo, createSignal, For } from "solid-js";

export function TransferList() {
  const [available, setAvailable] = createSignal(["Brazil", "Ireland"]);
  const [selected, setSelected] = createSignal<string[]>(["Mexico"]);
  const [availableValue, setAvailableValue] = createSignal<string[]>([]);
  const [selectedValue, setSelectedValue] = createSignal<string[]>([]);

  const availableCollection = createMemo(() =>
    createListCollection({
      items: available().map((label) => ({ label, value: label })),
    }),
  );

  const selectedCollection = createMemo(() =>
    createListCollection({
      items: selected().map((label) => ({ label, value: label })),
    }),
  );

  const moveToSelected = () => {
    const moving = availableValue();
    setAvailable((prev) => prev.filter((item) => !moving.includes(item)));
    setSelected((prev) => [...prev, ...moving]);
    setAvailableValue([]);
  };

  const moveToAvailable = () => {
    const moving = selectedValue();
    setSelected((prev) => prev.filter((item) => !moving.includes(item)));
    setAvailable((prev) => [...prev, ...moving]);
    setSelectedValue([]);
  };

  return (
    <div class="flex gap-2 max-sm:flex-col">
      <Item.Group variant="outline">
        <Item class="w-full p-1">
          <Listbox.Root
            class="min-h-40"
            collection={availableCollection()}
            onValueChange={(value) =>
              setAvailableValue(Array.isArray(value) ? value : [value])
            }
            selectionMode="multiple"
            value={availableValue()}
          >
            <Listbox.Content>
              <Listbox.ItemGroup heading="Available">
                <For each={availableCollection().items}>
                  {(item) => (
                    <Listbox.Item item={item}>
                      <Listbox.ItemText>{item.label}</Listbox.ItemText>
                      <Listbox.ItemIndicator />
                    </Listbox.Item>
                  )}
                </For>
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
      <div class="flex flex-row-reverse justify-center gap-2 sm:flex-col">
        <Button
          aria-label="Move to selected"
          disabled={availableValue().length === 0}
          onClick={moveToSelected}
          size="icon-md"
          variant="outline"
        >
          <CaretRightIcon />
        </Button>
        <Button
          aria-label="Move to available"
          disabled={selectedValue().length === 0}
          onClick={moveToAvailable}
          size="icon-md"
          variant="outline"
        >
          <CaretLeftIcon />
        </Button>
      </div>
      <Item.Group variant="outline">
        <Item class="w-full p-1">
          <Listbox.Root
            class="min-h-40"
            collection={selectedCollection()}
            onValueChange={(value) =>
              setSelectedValue(Array.isArray(value) ? value : [value])
            }
            selectionMode="multiple"
            value={selectedValue()}
          >
            <Listbox.Content class="max-h-48 min-h-40">
              <Listbox.ItemGroup heading="Selected">
                <For each={selectedCollection().items}>
                  {(item) => (
                    <Listbox.Item item={item}>
                      <Listbox.ItemText>{item.label}</Listbox.ItemText>
                      <Listbox.ItemIndicator />
                    </Listbox.Item>
                  )}
                </For>
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
    </div>
  );
}
