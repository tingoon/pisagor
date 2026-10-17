import source from "./disabled.tsx?raw";
import { PasswordInput } from "@pisagor/react";

export function Disabled() {
  return <PasswordInput disabled placeholder="••••••••" />;
}

export { source as DisabledSource };
