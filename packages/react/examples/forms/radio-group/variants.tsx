import { RadioGroup } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <RadioGroup.Root>
        <RadioGroup.Item value="primary" variant="primary">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Primary</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </RadioGroup.Root>
      <RadioGroup.Root>
        <RadioGroup.Item value="secondary" variant="secondary">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Secondary</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  );
}
