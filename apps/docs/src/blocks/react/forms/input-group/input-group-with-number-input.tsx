import { Input, InputGroup, NumberInput } from "@pisagor/react";

export function InputGroupWithNumberInput() {
  return (
    <InputGroup>
      <NumberInput.Root aria-label="Enter the amount" defaultValue="10">
        <NumberInput.Input asChild>
          <Input />
        </NumberInput.Input>
      </NumberInput.Root>
      <InputGroup.Addon>
        <InputGroup.Text>€</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Text>EUR</InputGroup.Text>
      </InputGroup.Addon>
    </InputGroup>
  );
}
