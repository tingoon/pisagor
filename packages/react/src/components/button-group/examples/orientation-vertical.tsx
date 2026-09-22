import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { ButtonGroup } from "..";
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
