import { Field, RadioGroup } from "@pisagor/solid";

export function RadioGroupField() {
  return (
    <Field.Set>
      <Field.Legend variant="label">Choose Plan</Field.Legend>
      <RadioGroup.Root defaultValue="free">
        <Field>
          <RadioGroup.Item value="free">
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>Free</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        </Field>
        <Field>
          <RadioGroup.Item value="pro">
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>Pro</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        </Field>
        <Field>
          <RadioGroup.Item value="enterprise">
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>Enterprise</RadioGroup.ItemText>
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        </Field>
      </RadioGroup.Root>
      <Field.Description>
        Select the plan that fits your needs.
      </Field.Description>
    </Field.Set>
  );
}
