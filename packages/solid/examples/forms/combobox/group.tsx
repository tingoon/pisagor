import { useFilter, useListCollection } from "@ark-ui/solid";
import { CaretUpDownIcon, CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Combobox, InputGroup } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";

export function Group() {
  const initialItems = [
    { continent: "North America", label: "Canada", value: "ca" },
    { continent: "North America", label: "United States", value: "us" },
    { continent: "North America", label: "Mexico", value: "mx" },
    { continent: "Europe", label: "United Kingdom", value: "uk" },
    { continent: "Europe", label: "Germany", value: "de" },
    { continent: "Europe", label: "France", value: "fr" },
    { continent: "Asia", label: "Japan", value: "jp" },
    { continent: "Asia", label: "South Korea", value: "kr" },
    { continent: "Asia", label: "China", value: "cn" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    groupBy: (item) => item.continent,
    initialItems,
  });

  return (
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
                placeholder="Select a timezone"
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
          <Combobox.Content class="w-60">
            <Combobox.List>
              <For each={collection().group()}>
                {([continent, group]) => (
                  <Combobox.ItemGroup>
                    <Combobox.ItemGroupLabel>
                      {continent}
                    </Combobox.ItemGroupLabel>
                    <For each={group}>
                      {(item) => (
                        <Combobox.Item item={item} persistFocus>
                          {item.label}
                          <Combobox.ItemIndicator>
                            <CheckIcon />
                          </Combobox.ItemIndicator>
                        </Combobox.Item>
                      )}
                    </For>
                  </Combobox.ItemGroup>
                )}
              </For>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
