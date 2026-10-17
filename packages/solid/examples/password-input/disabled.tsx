import source from "./disabled.tsx?raw";
import { PasswordInput } from "@pisagor/solid";

export function Disabled() {
  return <PasswordInput disabled placeholder="••••••••" />;
}

export { source as DisabledSource };
