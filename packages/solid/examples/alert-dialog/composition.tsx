/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { AlertDialog } from "@pisagor/solid/alert-dialog";
export function Composition() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
          <AlertDialog.Description>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger
            asChild={(props) => (
              <AlertDialog.Action {...props()}>Allow</AlertDialog.Action>
            )}
          />
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
