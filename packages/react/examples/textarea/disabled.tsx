import source from "./disabled.tsx?raw";
import { Textarea } from "@pisagor/react";

export function Disabled() {
  return <Textarea disabled placeholder="Type your feedback here" />;
}

export { source as DisabledSource };
