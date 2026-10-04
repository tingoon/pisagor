<script lang="ts">
import { Button } from "@pisagor/svelte";
import { ActionBar } from "@pisagor/svelte/action-bar";
import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@pisagor/svelte/icons";


let isOpen = $state(false);

</script>

<ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <Button onClick={() => isOpen = ((prev) => !prev)} variant="outline">
        Toggle
      </Button>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={2} />
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
            <Button
              aria-label="Close"
              size="icon-md"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>)(isOpen
