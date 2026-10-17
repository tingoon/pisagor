import source from "./scrub.tsx?raw";
import { NumberInput } from "@pisagor/solid";

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

export { source as ScrubSource };
