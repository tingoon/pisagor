import { Portal } from "@ark-ui/react";
import { Button, Popover } from "@pisagor/react";

export function Nested() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Notifications</Popover.Title>
              <Popover.Description>
                Check your notifications.
              </Popover.Description>
            </Popover.Header>
            <Popover.Body>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <Button size="sm" variant="outline">
                    Open nested
                  </Button>
                </Popover.Trigger>
                <Portal>
                  <Popover.Positioner>
                    <Popover.Content className="w-56">
                      <Popover.Header>
                        <Popover.Title>Nested popover</Popover.Title>
                        <Popover.Description>
                          You're all caught up. Check back later for new
                          notifications.
                        </Popover.Description>
                      </Popover.Header>
                    </Popover.Content>
                  </Popover.Positioner>
                </Portal>
              </Popover.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
