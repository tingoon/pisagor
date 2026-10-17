import source from "./compound.tsx?raw";
import { RadioGroup } from "@pisagor/react";

export function Compound() {
  return (
    <RadioGroup.Root defaultValue="1">
      <RadioGroup.Item value="1">Default</RadioGroup.Item>
      <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
      <RadioGroup.Item value="3">Compact</RadioGroup.Item>
    </RadioGroup.Root>
  );
}

export { source as CompoundSource };
