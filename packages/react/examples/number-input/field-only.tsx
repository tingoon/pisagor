import { NumberInput } from "@pisagor/react/number-input";

export function FieldOnly() {
  return (
    <NumberInput>
      <NumberInput.Control>
        <NumberInput.Input />
      </NumberInput.Control>
    </NumberInput>
  );
}
