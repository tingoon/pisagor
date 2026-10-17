import source from "./disabled.tsx?raw";
import { NumberInput } from "@pisagor/react";

export function Disabled() {
  return <NumberInput defaultValue="1" disabled />;
}

export { source as DisabledSource };
