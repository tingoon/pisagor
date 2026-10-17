import source from "./invalid.tsx?raw";
import { NumberInput } from "@pisagor/react";

export function Invalid() {
  return <NumberInput defaultValue="1" invalid />;
}

export { source as InvalidSource };
