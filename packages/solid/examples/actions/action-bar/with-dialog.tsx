import { Portal } from "solid-js/web";
import { TrashIcon, XIcon } from "@squidlab/phosphor-solid/icons";
import { ActionBar, AlertDialog, Button } from "@pisagor/solid";

export function WithDialog() {
  return (
    <ActionBar.Root>
      <ActionBar.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <ActionBar.Positioner>
          <ActionBar.Content aria-label="Order bulk actions">
            <ActionBar.Value count={3} />
            <ActionBar.Separator />
            <ActionBar.Body>
              <AlertDialog
                actions={
                  <>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.CloseTrigger
                      asChild={(props) => (
                        <AlertDialog.Action {...props()} variant="destructive">
                          Delete
                        </AlertDialog.Action>
                      )}
                    />
                  </>
                }
                description="This action cannot be undone."
                title="Delete selected orders?"
                trigger={
                  <Button variant="destructive">
                    <TrashIcon />
                    <span class="max-sm:sr-only">Delete</span>
                  </Button>
                }
              />
            </ActionBar.Body>
            <ActionBar.Separator />
            <ActionBar.Close
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Close"
                  size="icon-md"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              )}
            />
          </ActionBar.Content>
        </ActionBar.Positioner>
      </Portal>
    </ActionBar.Root>
  );
}
