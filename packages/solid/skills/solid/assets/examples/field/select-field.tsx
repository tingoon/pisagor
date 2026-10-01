/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
export function SelectField() {
  const collection = createListCollection({
    items: ["Brazil", "Mexico", "Ireland"],
  });
  return (
    <Field>
      <Field.Label>Country</Field.Label>
      <Select.Root collection={collection}>
        <Select.Trigger class="w-full">
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item}>{item}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Field.Description>Used for shipping estimates</Field.Description>
    </Field>
  );
}
