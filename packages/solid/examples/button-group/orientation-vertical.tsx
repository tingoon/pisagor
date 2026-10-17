import source from "./orientation-vertical.tsx?raw";
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

export { source as OrientationVerticalSource };
