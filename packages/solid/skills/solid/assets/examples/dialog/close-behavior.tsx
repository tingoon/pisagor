/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { Dialog } from "@pisagor/solid/dialog";
import { Portal } from "solid-js/web";
export function CloseBehavior() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Dialog.Root closeOnInteractOutside={false}>
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              No close on outside click
            </Button>
          )}
        />
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <Dialog.Title>Stays on outside click</Dialog.Title>
                <Dialog.Description>
                  Clicking outside does not close this dialog. Press ESC or use
                  the button to close.
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Dialog.Root closeOnEscape={false}>
        <Dialog.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              No close on Escape
            </Button>
          )}
        />
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <Dialog.Title>Escape key unavailable</Dialog.Title>
                <Dialog.Description>
                  Pressing Escape does not close this dialog. Click outside or
                  use the close button.
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
}
