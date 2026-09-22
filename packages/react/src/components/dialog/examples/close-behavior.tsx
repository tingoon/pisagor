import { Portal } from "@ark-ui/react/portal";
import { Button } from "@pisagor/react";
import { Dialog } from "..";
export function CloseBehavior() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Dialog.Root closeOnInteractOutside={false}>
        <Dialog.Trigger asChild>
          <Button variant="outline">No close on outside click</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <Dialog.Title>Stays on outside click</Dialog.Title>
                <Dialog.Description>
                  Clicking outside does not close this dialog. Press ESC or use the button to close.
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Dialog.Root closeOnEscape={false}>
        <Dialog.Trigger asChild>
          <Button variant="outline">No close on Escape</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <Dialog.Title>Escape key unavailable</Dialog.Title>
                <Dialog.Description>
                  Pressing Escape does not close this dialog. Click outside or use the close button.
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
}
