import source from "./field-only.tsx?raw";
import { NumberInput } from "@pisagor/solid";

export function FieldOnly() {
  return (
    <NumberInput>
      <NumberInput.Control>
        <NumberInput.Input />
      </NumberInput.Control>
    </NumberInput>
  );
}

export { source as FieldOnlySource };
