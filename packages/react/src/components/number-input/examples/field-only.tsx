import { NumberInput } from "..";

export function FieldOnly() {
  return (
    <NumberInput>
      <NumberInput.Control>
        <NumberInput.Input />
      </NumberInput.Control>
    </NumberInput>
  );
}
