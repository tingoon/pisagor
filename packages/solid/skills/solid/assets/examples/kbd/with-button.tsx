/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { FloppyDiskIcon } from "@pisagor/solid/icons";
import { Kbd } from "@pisagor/solid/kbd";
export function WithButton() {
  return (
    <Button variant="outline">
      <FloppyDiskIcon />
      Save
      <Kbd.Group class="translate-x-0.5">
        <Kbd variant="outline">Ctrl+S</Kbd>
      </Kbd.Group>
    </Button>
  );
}
