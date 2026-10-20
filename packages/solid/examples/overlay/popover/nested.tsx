import { Portal } from "solid-js/web";
import { Button, Popover } from "@pisagor/solid";

export function Nested() {
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
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Notifications</Popover.Title>
              <Popover.Description>
                Check your notifications.
              </Popover.Description>
            </Popover.Header>
            <Popover.Body>
              <Popover.Root>
                <Popover.Trigger
                  asChild={(props) => (
                    <Button {...props()} size="sm" variant="outline">
                      Open nested
                    </Button>
                  )}
                />
                <Portal>
                  <Popover.Positioner>
                    <Popover.Content class="w-56">
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
