import { Portal } from "solid-js/web";
import { Button, Popover } from "@pisagor/solid";

export function Modal() {
  return (
    <Popover.Root modal>
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
                You're all caught up. Check back later for new notifications.
              </Popover.Description>
            </Popover.Header>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
