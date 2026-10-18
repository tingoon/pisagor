import { Button, Kbd, Tooltip } from "@pisagor/solid";

export function WithTooltip() {
  return (
    <Tooltip
      classNames={{ content: "flex items-center gap-2" }}
      content={
        <>
          Toggle mode
          <Kbd.Group class="ml-1.5 inline">
            <Kbd>D</Kbd>
          </Kbd.Group>
        </>
      }
    >
      <Button size="sm" variant="outline">
        Dark mode
      </Button>
    </Tooltip>
  );
}
