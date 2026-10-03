/** @jsxImportSource solid-js */
import { Button, Kbd } from "@pisagor/solid";
import { Tooltip } from "@pisagor/solid/tooltip";
export function WithKeyboardShortcut() {
  return (
    <Tooltip
      classNames={{ content: "flex items-center gap-2" }}
      content={
        <>
          <p>Add to library</p>
          <Kbd.Group class="ml-1.5 inline">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </Kbd.Group>
        </>
      }
    >
      <Button variant="outline">Add to library</Button>
    </Tooltip>
  );
}
