<script lang="ts">
  import { Button, Sheet } from "@pisagor/svelte";
</script>

<Sheet
  description="This is a non-modal sheet. You can interact with elements outside the sheet."
  modal={false}
  title="Non-modal sheet"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Close</Button>
      {/snippet}
    </Sheet.CloseTrigger>
  {/snippet}

  <p class="text-muted-foreground text-sm">
    Non-modal sheets allow interaction with elements outside. Focus trapping and
    scroll prevention are turned off.
  </p>
</Sheet>
