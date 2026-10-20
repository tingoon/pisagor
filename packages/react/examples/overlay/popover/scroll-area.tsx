import { Portal } from "@ark-ui/react";
import { Button, Popover } from "@pisagor/react";

export function ScrollArea() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }));

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="h-80 w-72">
            <Popover.Header>
              <Popover.Title>Scrollable content</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li
                    className="hover:bg-muted rounded-md px-2 py-1.5 text-sm"
                    key={item.id}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </Popover.Body>
            <Popover.Footer>
              <Popover.CloseTrigger asChild>
                <Button>Close</Button>
              </Popover.CloseTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
