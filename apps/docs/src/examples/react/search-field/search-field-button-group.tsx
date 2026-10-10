import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup, Input } from "@pisagor/react";

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
