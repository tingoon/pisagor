/** @jsxImportSource solid-js */
import { Button, ButtonGroup, Input } from "@pisagor/solid";
import { MagnifyingGlassIcon } from "@pisagor/solid/icons";

export function SearchFieldButtonGroup() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." type="search" />
      <Button variant="outline">
        <MagnifyingGlassIcon />
      </Button>
    </ButtonGroup>
  );
}
