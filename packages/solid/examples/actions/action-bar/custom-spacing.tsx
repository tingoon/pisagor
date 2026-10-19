import { Portal } from "solid-js/web";
import {
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@squidlab/phosphor-solid/icons";
import { ActionBar, Button } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function CustomSpacing() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <ActionBar.Root onOpenChange={setIsOpen} open={isOpen()}>
      <ActionBar.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <ActionBar.Positioner>
          <ActionBar.Content
            aria-label="Bulk actions"
            class="[--space:--spacing(2)]"
          >
            <ActionBar.Value count={2} />
            <ActionBar.Separator />
            <ActionBar.Body>
              <Button variant="ghost">
                <PencilSimpleIcon />
                <span class="max-sm:sr-only">Edit</span>
              </Button>
              <ActionBar.Separator />
              <Button variant="destructive">
                <TrashIcon />
                <span class="max-sm:sr-only">Delete</span>
              </Button>
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
