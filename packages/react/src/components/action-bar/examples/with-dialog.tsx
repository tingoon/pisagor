import { TrashIcon, XIcon } from "@phosphor-icons/react";
import { AlertDialog, Button } from "@pisagor/react";
import { ActionBar } from "..";
export function WithDialog() {
  return (
    <ActionBar>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content aria-label="Order bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <AlertDialog
            actions={
              <>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.CloseTrigger asChild>
                  <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
                </AlertDialog.CloseTrigger>
              </>
            }
            description="This action cannot be undone."
            title="Delete selected orders?"
            trigger={
              <Button variant="destructive">
                <TrashIcon />
                <span className="max-sm:sr-only">Delete</span>
              </Button>
            }
          />
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close asChild>
          <Button aria-label="Close" size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  );
}
