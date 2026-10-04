/** @jsxImportSource solid-js */
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
