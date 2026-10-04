import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { InputGroup } from "@pisagor/react/input-group";

export function Default() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <MagnifyingGlassIcon />
      </InputGroup.Addon>
    </InputGroup>
  );
}
