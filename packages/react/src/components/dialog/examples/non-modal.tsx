import { Portal } from "@ark-ui/react/portal";
import { Button } from "@pisagor/react";
import { Dialog } from "..";
export function NonModal() {
  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
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
              <p className="text-muted-foreground text-sm">
                Non-modal dialogs allow interaction with elements outside the
                dialog. Focus trapping and scroll prevention are turned off.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Close</Button>
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
