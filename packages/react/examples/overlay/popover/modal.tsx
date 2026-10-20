import { Portal } from "@ark-ui/react";
import { Button, Popover } from "@pisagor/react";

export function Modal() {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Notifications</Popover.Title>
              <Popover.Description>
                You're all caught up. Check back later for new notifications.
              </Popover.Description>
            </Popover.Header>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
