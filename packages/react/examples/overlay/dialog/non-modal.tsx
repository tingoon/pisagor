import { Button, Dialog } from "@pisagor/react";

export function NonModal() {
  return (
    <Dialog
      actions={
        <Dialog.CloseTrigger asChild>
          <Button variant="outline">Close</Button>
        </Dialog.CloseTrigger>
      }
      description="This is a non-modal dialog. You can interact with elements outside the dialog."
      modal={false}
      title="Non-modal dialog"
      trigger={<Button variant="outline">Open</Button>}
    >
      <p className="text-muted-foreground text-sm">
        Non-modal dialogs allow interaction with elements outside the dialog.
        Focus trapping and scroll prevention are turned off.
      </p>
    </Dialog>
  );
}
