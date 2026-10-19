<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { actionBarRecipe } from "@pisagor/recipes";
  import { ActionBar, Button } from "@pisagor/svelte";
  import {
    ArchiveIcon,
    DownloadIcon,
    PencilSimpleIcon,
    TrashIcon,
    XIcon,
  } from "phosphor-svelte";
  import { tv } from "tailwind-variants";

  const brandActionBarRecipe = tv({
    extend: actionBarRecipe,
    slots: {
      content: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950",
    },
    variants: {},
  });
</script>

<ActionBar.Root recipe={brandActionBarRecipe}>
  <ActionBar.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </ActionBar.Trigger>
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
        <ActionBar.Close>
          {#snippet asChild(props)}
            <Button
              {...props()}
              aria-label="Close"
              size="icon-md"
              variant="ghost"
            >
              <XIcon />
            </Button>
          {/snippet}
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar.Positioner>
  </Portal>
</ActionBar.Root>
