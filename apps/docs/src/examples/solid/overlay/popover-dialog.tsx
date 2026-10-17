/** @jsxImportSource solid-js */
import { Button, Dialog, Popover } from "@pisagor/solid";
import { Portal } from "solid-js/web";

export function PopoverDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open dialog
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Nested layers</Dialog.Title>
              <Dialog.Description>
                Open the popover from the button below — it stays anchored to
                its trigger above the dialog.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <Popover>
                <Popover.Trigger
                  asChild={(props) => (
                    <Button {...props()} variant="outline">
                      Open popover
                    </Button>
                  )}
                />
                <Popover.Content>
                  <Popover.Header
                    description="You're all caught up. Check back later for new notifications."
                    title="Notifications"
                  />
                </Popover.Content>
              </Popover>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Done
                  </Button>
                )}
              />
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
