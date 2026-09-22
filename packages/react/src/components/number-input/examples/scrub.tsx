import { NumberInput } from "..";

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
