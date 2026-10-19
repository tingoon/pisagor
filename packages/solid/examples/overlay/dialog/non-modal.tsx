import { Button, Dialog } from "@pisagor/solid";

export function NonModal() {
  return (
    <Dialog
      actions={
        <Dialog.CloseTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Close
            </Button>
          )}
        />
      }
      description="This is a non-modal dialog. You can interact with elements outside the dialog."
      modal={false}
      title="Non-modal dialog"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <p class="text-muted-foreground text-sm">
        Non-modal dialogs allow interaction with elements outside the dialog.
        Focus trapping and scroll prevention are turned off.
      </p>
    </Dialog>
  );
}
