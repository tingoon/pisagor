/** @jsxImportSource solid-js */
import { Input, InputGroup, NumberInput } from "@pisagor/solid";

export function InputGroupWithNumberInput() {
  return (
    <InputGroup>
      <NumberInput.Root aria-label="Enter the amount" defaultValue="10">
        <NumberInput.Input asChild={(props) => <Input {...props()} />} />
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
