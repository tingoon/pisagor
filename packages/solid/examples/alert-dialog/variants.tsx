/** @jsxImportSource solid-js */
import { AlertDialog, Button } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-wrap gap-2">
      <AlertDialog
        actions={
          <>
            <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
            <AlertDialog.CloseTrigger
              asChild={(props) => (
                <AlertDialog.Action {...props()} variant="default">
                  Allow
                </AlertDialog.Action>
              )}
            />
          </>
        }
        description="Do you want to allow the USB accessory to connect to this device?"
        title="Allow accessory to connect?"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Default
          </Button>
        )}
      />
      <AlertDialog
        actions={
          <>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.CloseTrigger
              asChild={(props) => (
                <AlertDialog.Action {...props()} variant="destructive">
                  Delete project
                </AlertDialog.Action>
              )}
            />
          </>
        }
        description="This action cannot be undone. This will permanently delete the project and remove all data."
        title="Delete project"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Destructive
          </Button>
        )}
      />
    </div>
  );
}
