import { Button } from "@pisagor/react";
import { AlertDialog } from "..";
export function Variants() {
  return (
    <div className="flex flex-wrap gap-2">
      <AlertDialog
        actions={
          <>
            <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
            <AlertDialog.CloseTrigger asChild>
              <AlertDialog.Action variant="default">Allow</AlertDialog.Action>
            </AlertDialog.CloseTrigger>
          </>
        }
        description="Do you want to allow the USB accessory to connect to this device?"
        title="Allow accessory to connect?"
        trigger={<Button variant="outline">Default</Button>}
      />
      <AlertDialog
        actions={
          <>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.CloseTrigger asChild>
              <AlertDialog.Action variant="destructive">
                Delete project
              </AlertDialog.Action>
            </AlertDialog.CloseTrigger>
          </>
        }
        description="This action cannot be undone. This will permanently delete the project and remove all data."
        title="Delete project"
        trigger={<Button variant="outline">Destructive</Button>}
      />
    </div>
  );
}
