/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { ButtonGroup } from "@pisagor/solid/button-group";
import { MinusIcon, PlusIcon } from "@pisagor/solid/icons";
export function WithSeparator() {
  return (
    <ButtonGroup>
      <Button aria-label="Remove" size="icon-md" variant="secondary">
        <MinusIcon />
      </Button>
      <ButtonGroup.Separator />
      <Button aria-label="Add" size="icon-md" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  );
}
