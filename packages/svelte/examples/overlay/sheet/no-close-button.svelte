<script lang="ts">
  import { Button, Sheet } from "@pisagor/svelte";
</script>

<Sheet
  description="You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop."
  showCloseButton={false}
  title="No close button"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Cancel</Button>
      {/snippet}
    </Sheet.CloseTrigger>
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Confirm</Button>
      {/snippet}
    </Sheet.CloseTrigger>
  {/snippet}

  <p class="text-muted-foreground text-sm">
    The close button in the top right corner is hidden. Use the footer buttons
    or press Escape to close.
  </p>
</Sheet>
