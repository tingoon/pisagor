import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { ButtonGroup } from "..";
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
