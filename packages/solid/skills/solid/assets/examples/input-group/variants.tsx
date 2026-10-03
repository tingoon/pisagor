/** @jsxImportSource solid-js */
import { MagnifyingGlassIcon } from "@pisagor/solid/icons";
import { InputGroup } from "@pisagor/solid/input-group";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
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
