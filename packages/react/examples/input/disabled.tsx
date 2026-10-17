import source from "./disabled.tsx?raw";
import { Input } from "@pisagor/react";

export function Disabled() {
  return <Input disabled placeholder="you@example.com" />;
}

export { source as DisabledSource };
