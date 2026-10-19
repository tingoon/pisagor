import { useFilter, useListCollection } from "@ark-ui/solid";
import { CaretUpDownIcon, CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Combobox, Field, InputGroup } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

export function ComboboxField() {
  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Field>
      <Field.Label>Fruits</Field.Label>
      <Combobox.Root
        collection={collection()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Control>
          <InputGroup>
            <Combobox.Input
              asChild={(inputProps) => (
                <InputGroup.Input
                  {...inputProps()}
                  aria-label="Select an item"
                  placeholder="Select an item..."
                />
              )}
            />
            <InputGroup.Addon align="inline-end">
              <InputGroup.Button
                asChild={(buttonProps) => (
                  <Combobox.Trigger {...buttonProps()}>
                    <CaretUpDownIcon aria-hidden />
                  </Combobox.Trigger>
                )}
                size="icon-xs"
                variant="ghost"
              />
            </InputGroup.Addon>
          </InputGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.List>
                <For each={collection().items}>
                  {(item) => (
                    <Combobox.Item item={item} persistFocus>
                      {item.label}
                      <Combobox.ItemIndicator>
                        <CheckIcon />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  )}
                </For>
              </Combobox.List>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Field.Description>Select an item.</Field.Description>
    </Field>
  );
}
