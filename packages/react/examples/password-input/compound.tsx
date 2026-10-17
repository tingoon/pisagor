import source from "./compound.tsx?raw";
import { PasswordInput } from "@pisagor/react";

export function Compound() {
  return (
    <PasswordInput.Root className="w-64">
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Password" />
        <PasswordInput.VisibilityTrigger />
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
}

export { source as CompoundSource };
