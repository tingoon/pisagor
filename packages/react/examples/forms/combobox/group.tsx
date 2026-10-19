import { Portal, useFilter, useListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Combobox, InputGroup } from "@pisagor/react";

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
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.continent,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Control>
        <InputGroup>
          <Combobox.Input asChild>
            <InputGroup.Input placeholder="Select a timezone" />
          </Combobox.Input>
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button asChild size="icon-xs" variant="ghost">
              <Combobox.Trigger>
                <CaretUpDownIcon aria-hidden />
              </Combobox.Trigger>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content className="w-60">
            <Combobox.List>
              {collection.group().map(([continent, group]) => (
                <Combobox.ItemGroup key={continent}>
                  <Combobox.ItemGroupLabel>{continent}</Combobox.ItemGroupLabel>
                  {group.map((item) => (
                    <Combobox.Item item={item} key={item.value} persistFocus>
                      {item.label}
                      <Combobox.ItemIndicator>
                        <CheckIcon />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  ))}
                </Combobox.ItemGroup>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
