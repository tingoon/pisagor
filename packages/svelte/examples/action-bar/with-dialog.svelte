<script lang="ts">
import { ActionBar, AlertDialog, Button } from "@pisagor/svelte";
import { TrashIcon, XIcon } from "@pisagor/svelte/icons";
</script>

<ActionBar>
  <ActionBar.Trigger>
    <Button variant="outline">Open</Button>
  </ActionBar.Trigger>
  <ActionBar.Content aria-label="Order bulk actions">
    <ActionBar.Value count={3} />
    <ActionBar.Separator />
    <ActionBar.Body>
      <AlertDialog description="This action cannot be undone." title="Delete selected orders?">
        {#snippet trigger()}
          <Button variant="destructive">
            <TrashIcon />
            <span class="max-sm:sr-only">Delete</span>
          </Button>
        {/snippet}
        {#snippet actions()}
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.CloseTrigger>
            <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
          </AlertDialog.CloseTrigger>
        {/snippet}
      </AlertDialog>
    </ActionBar.Body>
    <ActionBar.Separator />
    <ActionBar.Close>
      <Button aria-label="Close" size="icon-md" variant="ghost">
        <XIcon />
      </Button>
    </ActionBar.Close>
  </ActionBar.Content>
</ActionBar>
