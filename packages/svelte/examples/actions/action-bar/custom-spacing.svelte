<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ActionBar, Button } from "@pisagor/svelte";
  import { PencilSimpleIcon, TrashIcon, XIcon } from "phosphor-svelte";

  let isOpen = $state(false);
</script>

<ActionBar.Root onOpenChange={(open) => (isOpen = open)} open={isOpen}>
  <ActionBar.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </ActionBar.Trigger>
  <Portal>
    <ActionBar.Positioner>
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
