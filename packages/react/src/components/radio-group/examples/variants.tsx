import { RadioGroup } from "..";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <RadioGroup.Root>
        <RadioGroup.Item value="primary" variant="primary">
          Primary
        </RadioGroup.Item>
      </RadioGroup.Root>
      <RadioGroup.Root>
        <RadioGroup.Item value="secondary" variant="secondary">
          Secondary
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  );
}
