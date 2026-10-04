/** @jsxImportSource solid-js */

import { Button, ButtonGroup } from "@pisagor/solid";
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
