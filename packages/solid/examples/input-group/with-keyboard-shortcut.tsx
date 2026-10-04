/** @jsxImportSource solid-js */
import { InputGroup, Kbd } from "@pisagor/solid";
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
