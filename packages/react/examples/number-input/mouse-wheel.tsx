import source from "./mouse-wheel.tsx?raw";
import { NumberInput } from "@pisagor/react";

export function MouseWheel() {
  return <NumberInput allowMouseWheel defaultValue="1" />;
}

export { source as MouseWheelSource };
