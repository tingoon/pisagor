/** @jsxImportSource solid-js */
import { MagnifyingGlassIcon } from "@pisagor/solid/icons";
import { InputGroup } from "@pisagor/solid/input-group";

export function Disabled() {
  return (
    <InputGroup>
      <InputGroup.Input disabled placeholder="Search..." />
      <InputGroup.Addon>
        <MagnifyingGlassIcon aria-hidden />
      </InputGroup.Addon>
    </InputGroup>
  );
}
