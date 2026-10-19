<script lang="ts">
  import { Button, Dialog, Popover } from "@pisagor/svelte";
</script>

<Dialog
  description="Open the popover from the button below — it stays anchored to its trigger above the dialog."
  title="Nested layers"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open dialog</Button>
  {/snippet}
  {#snippet actions()}
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Done</Button>
      {/snippet}
    </Dialog.CloseTrigger>
  {/snippet}

  <Popover
    description="You're all caught up. Check back later for new notifications."
    title="Notifications"
  >
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Open popover</Button>
    {/snippet}
  </Popover>
</Dialog>
