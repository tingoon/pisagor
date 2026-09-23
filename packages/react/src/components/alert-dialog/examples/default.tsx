import { Button } from "@pisagor/react";
import { AlertDialog } from "..";
export function Default() {
  return (
    <AlertDialog
      actions={
        <>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger asChild>
            <AlertDialog.Action>Allow</AlertDialog.Action>
          </AlertDialog.CloseTrigger>
        </>
      }
      description="Do you want to allow the USB accessory to connect to this device?"
      title="Allow accessory to connect?"
      trigger={<Button variant="outline">Open</Button>}
    />
  );
}
