/** @jsxImportSource solid-js */
import { InputGroup } from "@pisagor/solid";

export function Default() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <span aria-hidden="true">⌕</span>
      </InputGroup.Addon>
    </InputGroup>
  );
}
