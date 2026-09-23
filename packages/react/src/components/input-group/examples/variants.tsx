import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { InputGroup } from "..";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup variant="primary">
        <InputGroup.Input placeholder="Primary" />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup variant="secondary">
        <InputGroup.Input placeholder="Secondary" />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
}
