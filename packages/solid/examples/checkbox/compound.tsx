import source from "./compound.tsx?raw";
import { Checkbox } from "@pisagor/solid";

export function Compound() {
  return (
    <Checkbox.Root defaultChecked>
      <Checkbox.Control />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}

export { source as CompoundSource };
