import { Input, NumberInput } from "@pisagor/react";

export function FieldOnly() {
  return (
    <NumberInput.Root>
      <NumberInput.Control>
        <NumberInput.Input asChild>
          <Input />
        </NumberInput.Input>
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
