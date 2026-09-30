import { AlertDialog } from "../../../../../src/components/alert-dialog/index";
import { Button } from "../../../../../src/components/button";

export function Default() {
  return (
    <AlertDialog
      actions={
        <>
          <AlertDialog.Cancel>Don't allow</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger
            asChild={(props) => (
              <AlertDialog.Action {...props()}>Allow</AlertDialog.Action>
            )}
          />
        </>
      }
      description="Do you want to allow the USB accessory to connect to this device?"
      title="Allow accessory to connect?"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    />
  );
}
