import { Button } from "@pisagor/react";
import { Popover } from "..";
export function Nested() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header
          description="Check your notifications."
          title="Notifications"
        />
        <Popover.Body>
          <Popover>
            <Popover.Trigger asChild>
              <Button size="sm" variant="outline">
                Open nested
              </Button>
            </Popover.Trigger>
            <Popover.Content className="w-56">
              <Popover.Header
                description="You're all caught up. Check back later for new notifications."
                title="Nested popover"
              />
            </Popover.Content>
          </Popover>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
