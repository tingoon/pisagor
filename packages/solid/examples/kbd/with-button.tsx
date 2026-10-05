import { Button, Kbd } from "@pisagor/solid";
import { FloppyDiskIcon } from "@pisagor/solid/icons";

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
