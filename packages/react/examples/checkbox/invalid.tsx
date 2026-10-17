import source from "./invalid.tsx?raw";
import { Checkbox } from "@pisagor/react";

export function Invalid() {
  return <Checkbox invalid />;
}

export { source as InvalidSource };
