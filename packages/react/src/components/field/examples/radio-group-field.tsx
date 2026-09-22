import { RadioGroup } from "@pisagor/react";
import { Field } from "..";
export function RadioGroupField() {
  return (
    <Field.Set>
      <Field.Legend variant="label">Choose Plan</Field.Legend>
      <RadioGroup.Root defaultValue="free">
        <Field>
          <RadioGroup.Item value="free">Free</RadioGroup.Item>
        </Field>
        <Field>
          <RadioGroup.Item value="pro">Pro</RadioGroup.Item>
        </Field>
        <Field>
          <RadioGroup.Item value="enterprise">Enterprise</RadioGroup.Item>
        </Field>
      </RadioGroup.Root>
      <Field.Description>Select the plan that fits your needs.</Field.Description>
    </Field.Set>
  );
}
