<script lang="ts">
import { actionBarRecipe } from "@pisagor/recipes";
import { ActionBar, Button } from "@pisagor/svelte";
import ArchiveIcon from "phosphor-svelte/lib/ArchiveIcon";
import DownloadIcon from "phosphor-svelte/lib/DownloadIcon";
import PencilSimpleIcon from "phosphor-svelte/lib/PencilSimpleIcon";
import TrashIcon from "phosphor-svelte/lib/TrashIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import { tv } from "tailwind-variants";

const brandActionBarRecipe = tv({
  extend: actionBarRecipe,
  slots: { content: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});
</script>

<ActionBar recipe={brandActionBarRecipe}>
  <ActionBar.Trigger>
    <Button variant="outline">Open</Button>
  </ActionBar.Trigger>
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
    <ActionBar.Close>
      <Button aria-label="Close" size="icon-md" variant="ghost">
        <XIcon />
      </Button>
    </ActionBar.Close>
  </ActionBar.Content>
</ActionBar>
