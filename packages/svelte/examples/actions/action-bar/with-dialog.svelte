<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ActionBar, AlertDialog, Button } from "@pisagor/svelte";
  import { TrashIcon, XIcon } from "phosphor-svelte";
</script>

<ActionBar.Root>
  <ActionBar.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </ActionBar.Trigger>
  <Portal>
    <ActionBar.Positioner>
      <ActionBar.Content aria-label="Order bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <AlertDialog
            description="This action cannot be undone."
            title="Delete selected orders?"
          >
            {#snippet trigger(props)}
              <Button {...props()} variant="destructive">
                <TrashIcon />
                <span class="max-sm:sr-only">Delete</span>
              </Button>
            {/snippet}
            {#snippet actions()}
              <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
              <AlertDialog.Action variant="destructive"
                >Delete</AlertDialog.Action
              >
            {/snippet}
          </AlertDialog>
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
