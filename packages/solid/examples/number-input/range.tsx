import source from "./range.tsx?raw";
import { NumberInput } from "@pisagor/solid";

export function Range() {
  return (
    <NumberInput>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  );
}

export { source as RangeSource };
