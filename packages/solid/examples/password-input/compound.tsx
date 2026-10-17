import source from "./compound.tsx?raw";
import { PasswordInput } from "@pisagor/solid";

export function Compound() {
  return (
    <PasswordInput.Root class="w-64">
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Password" />
        <PasswordInput.VisibilityTrigger />
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
}

export { source as CompoundSource };
