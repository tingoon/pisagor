import { Button } from "@pisagor/react";
import { Popover } from "..";
export function ScrollArea() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }));
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content className="h-80 w-72">
        <Popover.Header title="Scrollable content" />
        <Popover.Body>
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li
                className="rounded-md px-2 py-1.5 text-sm hover:bg-muted"
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
    </Popover>
  );
}
