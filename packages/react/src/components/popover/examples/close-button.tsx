import { Button } from "@pisagor/react";
import { Popover } from "..";
export function CloseButton() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content className="w-72" showCloseButton>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
  );
}
