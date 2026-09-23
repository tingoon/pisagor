import { Button } from "@pisagor/react";
import { Popover } from "..";
export function Modal() {
  return (
    <Popover modal>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
  );
}
