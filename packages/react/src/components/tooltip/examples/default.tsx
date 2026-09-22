import { TextBIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Tooltip } from "..";
export function Default() {
  return (
    <Tooltip content="Bold">
      {
        <Button aria-label="Bold" size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
      }
    </Tooltip>
  );
}
