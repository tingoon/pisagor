/** @jsxImportSource solid-js */
import { Kbd } from "@pisagor/solid";
import { InputGroup } from "@pisagor/solid/input-group";
export function WithKeyboardShortcut() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroup.Addon>
    </InputGroup>
  );
}
