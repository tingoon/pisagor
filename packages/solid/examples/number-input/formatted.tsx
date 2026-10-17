import { NumberInput } from "@pisagor/solid";

export function Formatted() {
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
