<script lang="ts">
import { Button } from "@pisagor/svelte";
import { ActionBar } from "@pisagor/svelte/action-bar";
import { PencilSimpleIcon, TrashIcon, XIcon } from "@pisagor/svelte/icons";


let isOpen = $state(false);

</script>

<ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <ActionBar.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </ActionBar.Trigger>
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
    </ActionBar>
