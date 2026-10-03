/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Tooltip } from "@pisagor/solid/tooltip";

export function Default() {
  return (
    <Tooltip content="Bold">
      <Button aria-label="Bold" size="icon-md" variant="outline">
        B
      </Button>
    </Tooltip>
  );
}
