<script lang="ts">
  import { ActionBar, Button } from "@pisagor/svelte";
  import {
    ArchiveIcon,
    DownloadIcon,
    PencilSimpleIcon,
    TrashIcon,
  } from "phosphor-svelte";
</script>

<ActionBar aria-label="Bulk actions" count={3}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

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
</ActionBar>
