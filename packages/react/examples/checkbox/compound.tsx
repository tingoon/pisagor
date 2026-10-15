import { Checkbox } from "@pisagor/react";

export function Compound() {
  return (
    <Checkbox.Root defaultChecked>
      <Checkbox.Control />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
