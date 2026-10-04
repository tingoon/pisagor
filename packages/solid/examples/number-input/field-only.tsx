/** @jsxImportSource solid-js */
import { NumberInput } from "@pisagor/solid/number-input";

export function FieldOnly() {
  return (
    <NumberInput>
      <NumberInput.Control>
        <NumberInput.Input />
      </NumberInput.Control>
    </NumberInput>
  );
}
