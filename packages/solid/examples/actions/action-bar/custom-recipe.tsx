import { Portal } from "solid-js/web";
import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@squidlab/phosphor-solid/icons";
import { ActionBar, Button } from "@pisagor/solid";
import { actionBarRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandActionBarRecipe = tv({
  extend: actionBarRecipe,
  slots: { content: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ActionBar.Root recipe={brandActionBarRecipe}>
      <ActionBar.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <ActionBar.Positioner>
          <ActionBar.Content aria-label="Bulk actions">
            <ActionBar.Value count={3} />
            <ActionBar.Separator />
            <ActionBar.Body>
              <Button variant="ghost">
                <PencilSimpleIcon />
                <span class="max-sm:sr-only">Edit</span>
              </Button>
              <Button variant="ghost">
                <DownloadIcon />
                <span class="max-sm:sr-only">Export</span>
              </Button>
              <Button variant="ghost">
                <ArchiveIcon />
                <span class="max-sm:sr-only">Archive</span>
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
