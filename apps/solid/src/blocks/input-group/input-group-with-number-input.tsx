/** @jsxImportSource solid-js */
import { InputGroup, NumberInput } from "@pisagor/solid";

export function InputGroupWithNumberInput() {
  return (
    <InputGroup>
      <NumberInput aria-label="Enter the amount" defaultValue="10">
        <NumberInput.Input />
      </NumberInput>
      <InputGroup.Addon>
        <InputGroup.Text>€</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Text>EUR</InputGroup.Text>
      </InputGroup.Addon>
    </InputGroup>
  );
}
