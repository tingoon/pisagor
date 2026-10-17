import source from "./invalid.tsx?raw";
import { Slider } from "@pisagor/react";

export function Invalid() {
  return <Slider defaultValue={[50]} invalid />;
}

export { source as InvalidSource };
