import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { ButtonGroup } from "@pisagor/react/button-group";
import { Input } from "@pisagor/react/input";

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
