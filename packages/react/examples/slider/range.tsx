import source from "./range.tsx?raw";
import { Slider } from "@pisagor/react";

export function Range() {
  return <Slider defaultValue={[40, 60]} />;
}

export { source as RangeSource };
