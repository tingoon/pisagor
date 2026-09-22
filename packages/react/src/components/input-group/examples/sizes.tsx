import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { InputGroup } from "..";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup size="sm">
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup size="md">
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
}
