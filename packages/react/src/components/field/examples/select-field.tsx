import { createListCollection } from "@ark-ui/react";
import { Select } from "@pisagor/react";
import { Field } from "..";
export function SelectField() {
  const collection = createListCollection({
    items: ["Brazil", "Mexico", "Ireland"],
  });
  return (
    <Field>
      <Field.Label>Country</Field.Label>
      <Select.Root collection={collection}>
        <Select.Trigger className="w-full">
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item}>
              {item}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Field.Description>Used for shipping estimates</Field.Description>
    </Field>
  );
}
