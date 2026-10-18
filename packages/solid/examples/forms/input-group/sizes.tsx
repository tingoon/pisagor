import { InputGroup } from "@pisagor/solid";
import { MagnifyingGlassIcon } from "@pisagor/solid/icons";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
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
