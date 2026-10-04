import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { InputGroup } from "@pisagor/react";

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
