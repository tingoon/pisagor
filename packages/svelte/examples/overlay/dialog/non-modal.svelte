<script lang="ts">
  import { Button, Dialog } from "@pisagor/svelte";
</script>

<Dialog
  description="This is a non-modal dialog. You can interact with elements outside the dialog."
  modal={false}
  title="Non-modal dialog"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Close</Button>
      {/snippet}
    </Dialog.CloseTrigger>
  {/snippet}

  <p class="text-muted-foreground text-sm">
    Non-modal dialogs allow interaction with elements outside the dialog. Focus
    trapping and scroll prevention are turned off.
  </p>
</Dialog>
