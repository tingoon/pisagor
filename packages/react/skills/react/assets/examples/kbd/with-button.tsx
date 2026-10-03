import { FloppyDiskIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Kbd } from "@pisagor/react/kbd";
export function WithButton() {
  return (
    <Button variant="outline">
      <FloppyDiskIcon />
      Save
      <Kbd.Group className="translate-x-0.5">
        <Kbd variant="outline">Ctrl+S</Kbd>
      </Kbd.Group>
    </Button>
  );
}
