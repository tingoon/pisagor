/** @jsxImportSource solid-js */
import { InputGroup } from "@pisagor/solid";

export function Invalid() {
  return (
    <InputGroup>
      <InputGroup.Addon>
        <InputGroup.Text>https://</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input aria-invalid class="pl-1!" placeholder="example.com" />
    </InputGroup>
  );
}
