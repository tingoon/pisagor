/** @jsxImportSource solid-js */
import { Button, Tooltip } from "@pisagor/solid";
import { Kbd } from "@pisagor/solid/kbd";
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
