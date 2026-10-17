import { InputGroup } from "@pisagor/solid";
import { MagnifyingGlassIcon } from "@pisagor/solid/icons";

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
