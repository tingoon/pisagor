import { Button, ButtonGroup } from "@pisagor/solid";
import { MinusIcon, PlusIcon } from "@squidlab/phosphor-solid/icons";
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
