import source from "./invalid.tsx?raw";
import { PasswordInput } from "@pisagor/solid";

export function Invalid() {
  return <PasswordInput invalid placeholder="••••••••" />;
}

export { source as InvalidSource };
