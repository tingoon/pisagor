import { Button, Tooltip } from "@pisagor/solid";

export function Default() {
  return (
    <Tooltip content="Bold">
      <Button aria-label="Bold" size="icon-md" variant="outline">
        B
      </Button>
    </Tooltip>
  );
}
