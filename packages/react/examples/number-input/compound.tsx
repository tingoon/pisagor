import { NumberInput } from "@pisagor/react";

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
