import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { InputGroup } from "..";

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
