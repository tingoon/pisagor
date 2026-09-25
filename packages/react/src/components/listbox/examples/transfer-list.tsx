import { createListCollection } from "@ark-ui/react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button, Item } from "@pisagor/react";
import { useCallback, useState } from "react";
import { Listbox } from "..";
export function TransferList() {
  const [available, setAvailable] = useState(["Brazil", "Ireland"]);
  const [selected, setSelected] = useState<string[]>(["Mexico"]);
  const [availableValue, setAvailableValue] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const availableCollection = createListCollection({
    items: available.map((label) => ({ label, value: label })),
  });

  const selectedCollection = createListCollection({
    items: selected.map((label) => ({ label, value: label })),
  });

  const moveToSelected = useCallback(() => {
    setAvailable((prev) =>
      prev.filter((item) => !availableValue.includes(item)),
    );
    setSelected((prev) => [...prev, ...availableValue]);
    setAvailableValue([]);
  }, [availableValue]);

  const moveToAvailable = useCallback(() => {
    setSelected((prev) => prev.filter((item) => !selectedValue.includes(item)));
    setAvailable((prev) => [...prev, ...selectedValue]);
    setSelectedValue([]);
  }, [selectedValue]);

  return (
    <div className="flex gap-2 max-sm:flex-col">
      <Item.Group variant="outline">
        <Item className="w-full p-1">
          <Listbox.Root
            className="min-h-40"
            collection={availableCollection}
            onValueChange={(value) =>
              setAvailableValue(Array.isArray(value) ? value : [value])
            }
            selectionMode="multiple"
            value={availableValue}
          >
            <Listbox.Content>
              <Listbox.ItemGroup heading="Available">
                {availableCollection.items.map((item) => (
                  <Listbox.Item item={item} key={item.value}>
                    <Listbox.ItemText>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
      <div className="flex flex-row-reverse justify-center gap-2 sm:flex-col">
        <Button
          aria-label="Move to selected"
          disabled={availableValue.length === 0}
          onClick={moveToSelected}
          size="icon-md"
          variant="outline"
        >
          <CaretRightIcon />
        </Button>
        <Button
          aria-label="Move to available"
          disabled={selectedValue.length === 0}
          onClick={moveToAvailable}
          size="icon-md"
          variant="outline"
        >
          <CaretLeftIcon />
        </Button>
      </div>
      <Item.Group variant="outline">
        <Item className="w-full p-1">
          <Listbox.Root
            className="min-h-40"
            collection={selectedCollection}
            onValueChange={(value) =>
              setSelectedValue(Array.isArray(value) ? value : [value])
            }
            selectionMode="multiple"
            value={selectedValue}
          >
            <Listbox.Content className="max-h-48 min-h-40">
              <Listbox.ItemGroup heading="Selected">
                {selectedCollection.items.map((item) => (
                  <Listbox.Item item={item} key={item.value}>
                    <Listbox.ItemText>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </Item.Group>
    </div>
  );
}
