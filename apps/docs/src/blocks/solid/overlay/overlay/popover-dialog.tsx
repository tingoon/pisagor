/** @jsxImportSource solid-js */
import { Portal } from "solid-js/web";
import { Button, Dialog, Popover } from "@pisagor/solid";

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
              <Popover.Root>
                <Popover.Trigger
                  asChild={(props) => (
                    <Button {...props()} variant="outline">
                      Open popover
                    </Button>
                  )}
                />
                <Portal>
                  <Popover.Positioner>
                    <Popover.Content>
                      <Popover.Header>
                        <Popover.Title>Notifications</Popover.Title>
                        <Popover.Description>
                          You're all caught up. Check back later for new
                          notifications.
                        </Popover.Description>
                      </Popover.Header>
                    </Popover.Content>
                  </Popover.Positioner>
                </Portal>
              </Popover.Root>
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
