import { Portal, createListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Field, Select } from "@pisagor/react";

export function SelectField() {
  const collection = createListCollection({
    items: ["Brazil", "Mexico", "Ireland"],
  });

  return (
    <Field>
      <Field.Label>Country</Field.Label>
      <Select.Root collection={collection}>
        <Select.Control>
          <Select.Trigger className="w-full">
            <Select.ValueText placeholder="Select a country" />
            <Select.Indicator>
              <CaretUpDownIcon />
            </Select.Indicator>
          </Select.Trigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {collection.items.map((item) => (
                <Select.Item item={item} key={item}>
                  {item}
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Field.Description>Used for shipping estimates</Field.Description>
    </Field>
  );
}
