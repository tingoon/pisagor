import { Portal } from "solid-js/web";
import { Button, Popover } from "@pisagor/solid";

export function ScrollArea() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }));

  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <Popover.Positioner>
          <Popover.Content class="h-80 w-72">
            <Popover.Header>
              <Popover.Title>Scrollable content</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <ul class="flex flex-col gap-1">
                {items.map((item) => (
                  <li class="hover:bg-muted rounded-md px-2 py-1.5 text-sm">
                    {item.label}
                  </li>
                ))}
              </ul>
            </Popover.Body>
            <Popover.Footer>
              <Popover.CloseTrigger
                asChild={(props) => <Button {...props()}>Close</Button>}
              />
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
