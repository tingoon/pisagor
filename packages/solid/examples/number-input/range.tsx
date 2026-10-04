/** @jsxImportSource solid-js */
import { NumberInput } from "@pisagor/solid/number-input";

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
