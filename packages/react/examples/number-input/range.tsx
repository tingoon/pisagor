import source from "./range.tsx?raw";
import { NumberInput } from "@pisagor/react";

export function Range() {
  return <NumberInput defaultValue="5" max={10} min={0} />;
}

export { source as RangeSource };
