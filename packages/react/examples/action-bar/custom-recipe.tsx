import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@phosphor-icons/react";
import { ActionBar, Button } from "@pisagor/react";
import { actionBarRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandActionBarRecipe = tv({
  extend: actionBarRecipe,
  slots: { content: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ActionBar recipe={brandActionBarRecipe}>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <Button variant="ghost">
            <PencilSimpleIcon />
            <span className="max-sm:sr-only">Edit</span>
          </Button>
          <Button variant="ghost">
            <DownloadIcon />
            <span className="max-sm:sr-only">Export</span>
          </Button>
          <Button variant="ghost">
            <ArchiveIcon />
            <span className="max-sm:sr-only">Archive</span>
          </Button>
          <ActionBar.Separator />
          <Button variant="destructive">
            <TrashIcon />
            <span className="max-sm:sr-only">Delete</span>
          </Button>
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
