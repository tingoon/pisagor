import { Portal } from "@ark-ui/react/portal";
import { Button, Dialog, Popover } from "@pisagor/react";

export function PopoverDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Nested layers</Dialog.Title>
              <Dialog.Description>
                Open the popover from the button below — it stays anchored to its trigger above the
                dialog.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <Popover>
                <Popover.Trigger asChild>
                  <Button variant="outline">Open popover</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Popover.Header
                    description="You're all caught up. Check back later for new notifications."
                    title="Notifications"
                  />
                </Popover.Content>
              </Popover>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Done</Button>
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
