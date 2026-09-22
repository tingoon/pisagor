import { Button } from "@pisagor/react";
import { AlertDialog } from "..";
export function Composition() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
          <AlertDialog.Description>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger asChild>
            <AlertDialog.Action>Allow</AlertDialog.Action>
          </AlertDialog.CloseTrigger>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
