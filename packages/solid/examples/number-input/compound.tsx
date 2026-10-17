import source from "./compound.tsx?raw";
import { NumberInput } from "@pisagor/solid";

export function Compound() {
  return (
    <NumberInput defaultValue="1">
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  );
}

export { source as CompoundSource };
