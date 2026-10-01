/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { ButtonGroup } from "@pisagor/solid/button-group";
import { MinusIcon, PlusIcon } from "@pisagor/solid/icons";
export function OrientationVertical() {
  return (
    <ButtonGroup>
      <Button aria-label="Add" size="icon-md" variant="outline">
        <PlusIcon />
      </Button>
      <Button aria-label="Remove" size="icon-md" variant="outline">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  );
}
