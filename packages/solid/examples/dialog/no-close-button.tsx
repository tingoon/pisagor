import { Button, Dialog } from "@pisagor/solid";
import { Portal } from "solid-js/web";
export function NoCloseButton() {
  return (
    <Dialog.Root>
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
          <Dialog.Content showCloseButton={false}>
            <Dialog.Header>
              <Dialog.Title>No close button</Dialog.Title>
              <Dialog.Description>
                You can only close this dialog using the buttons in the footer,
                by pressing Escape or by clicking the backdrop.
              </Dialog.Description>
            </Dialog.Header>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
