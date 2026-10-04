import { Button, Kbd, Tooltip } from "@pisagor/react";
export function WithKeyboardShortcut() {
  return (
    <Tooltip
      classNames={{ content: "flex items-center gap-2" }}
      content={
        <>
          <p>Add to library</p>
          <Kbd.Group className="ml-1.5 inline">
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
