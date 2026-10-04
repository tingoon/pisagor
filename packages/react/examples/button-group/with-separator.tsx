import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup } from "@pisagor/react";
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
