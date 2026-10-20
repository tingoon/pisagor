<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ActionBar, Button } from "@pisagor/svelte";
  import {
    ArchiveIcon,
    DownloadIcon,
    PencilSimpleIcon,
    TrashIcon,
    XIcon,
  } from "phosphor-svelte";

  let isOpen = $state(false);
  let placement: Placement = $state("bottom");

  type Placement = "bottom" | "bottom-start" | "bottom-end";

  const handleOpenChange = (nextPlacement: Placement) => {
    isOpen = true;
    placement = nextPlacement;
  };
</script>

<div class="flex flex-wrap gap-2">
  <Button onclick={() => handleOpenChange("bottom-start")} variant="outline">
    Bottom start
  </Button>
  <Button onclick={() => handleOpenChange("bottom")} variant="outline">
    Bottom
  </Button>
  <Button onclick={() => handleOpenChange("bottom-end")} variant="outline">
    Bottom end
  </Button>
</div>
<ActionBar.Root
  onOpenChange={(open) => (isOpen = open)}
  open={isOpen}
  positioning={{ placement }}
>
  <Portal>
    <ActionBar.Positioner>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={5} />
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
