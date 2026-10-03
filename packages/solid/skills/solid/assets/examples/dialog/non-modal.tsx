/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { Dialog } from "@pisagor/solid/dialog";
import { Portal } from "solid-js/web";
export function NonModal() {
  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Non-modal dialog</Dialog.Title>
              <Dialog.Description>
                This is a non-modal dialog. You can interact with elements
                outside the dialog.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <p class="text-muted-foreground text-sm">
                Non-modal dialogs allow interaction with elements outside the
                dialog. Focus trapping and scroll prevention are turned off.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Close
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
