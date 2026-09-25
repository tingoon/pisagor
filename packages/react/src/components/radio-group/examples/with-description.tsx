import { Field } from "@pisagor/react";
import { RadioGroup } from "..";
export function WithDescription() {
  return (
    <RadioGroup.Root defaultValue="all">
      <Field>
        <RadioGroup.Item value="all">Default</RadioGroup.Item>
        <Field.Description>
          Standard spacing for most use cases.
        </Field.Description>
      </Field>
      <Field>
        <RadioGroup.Item value="mentions">Comfortable</RadioGroup.Item>
        <Field.Description>More space between elements.</Field.Description>
      </Field>
      <Field>
        <RadioGroup.Item value="none">Compact</RadioGroup.Item>
        <Field.Description>
          Minimal spacing for dense layouts.
        </Field.Description>
      </Field>
    </RadioGroup.Root>
  );
}
