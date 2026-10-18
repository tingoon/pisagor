import { InputGroup, Kbd } from "@pisagor/react";
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
