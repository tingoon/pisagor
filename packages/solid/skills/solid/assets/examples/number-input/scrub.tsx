/** @jsxImportSource solid-js */
import { NumberInput } from "@pisagor/solid/number-input";

export function Scrub() {
  return (
    <NumberInput>
      <NumberInput.Scrubber>Quantity</NumberInput.Scrubber>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  );
}
