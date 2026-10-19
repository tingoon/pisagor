import { Portal } from "@ark-ui/react";
import { AlertDialog, Button } from "@pisagor/react";

export function Composition() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialog.Trigger>
      <Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Positioner>
          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
              <AlertDialog.Description>
                Do you want to allow the USB accessory to connect to this
                device?
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
              <AlertDialog.Action>Allow</AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Positioner>
      </Portal>
    </AlertDialog.Root>
  );
}
