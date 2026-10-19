import { useFilter, useListCollection } from "@ark-ui/solid";
import { CaretUpDownIcon, CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Combobox, InputGroup } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";

export function Multiple() {
  const initialItems = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection()}
      multiple
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Control>
        <InputGroup>
          <Combobox.Input
            asChild={(inputProps) => (
              <InputGroup.Input
                {...inputProps()}
                placeholder="Select frameworks..."
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
  );
}
