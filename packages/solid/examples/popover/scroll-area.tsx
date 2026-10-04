/** @jsxImportSource solid-js */
import { Button, Popover } from "@pisagor/solid";
export function ScrollArea() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }));
  return (
    <Popover>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content class="h-80 w-72">
        <Popover.Header title="Scrollable content" />
        <Popover.Body>
          <ul class="flex flex-col gap-1">
            {items.map((item) => (
              <li class="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
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
    </Popover>
  );
}
