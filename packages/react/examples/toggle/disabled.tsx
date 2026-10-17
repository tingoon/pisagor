import source from "./disabled.tsx?raw";
import { Toggle } from "@pisagor/react";

export function Disabled() {
  return (
    <Toggle disabled variant="outline">
      Unavailable
    </Toggle>
  );
}

export { source as DisabledSource };
