import source from "./invalid.tsx?raw";
import { PasswordInput } from "@pisagor/react";

export function Invalid() {
  return <PasswordInput invalid placeholder="••••••••" />;
}

export { source as InvalidSource };
