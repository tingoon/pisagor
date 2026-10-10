/** @jsxImportSource solid-js */
import { InputGroup } from "@pisagor/solid";

export function InputGroupWithButton() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Your email" type="email" />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button size="xs" variant="ghost">
          Subscribe
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  );
}
