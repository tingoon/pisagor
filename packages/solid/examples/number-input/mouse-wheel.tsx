import source from "./mouse-wheel.tsx?raw";
import { NumberInput } from "@pisagor/solid";

export function MouseWheel() {
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

export { source as MouseWheelSource };
