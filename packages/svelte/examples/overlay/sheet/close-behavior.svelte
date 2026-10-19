<script lang="ts">
  import { Button, Sheet } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap justify-center gap-2">
  <Sheet
    closeOnInteractOutside={false}
    description="Clicking outside does not close this sheet. Press ESC or use the close button."
    title="Stays on outside click"
  >
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">No close on outside click</Button>
    {/snippet}
  </Sheet>
  <Sheet
    closeOnEscape={false}
    description="Pressing Escape does not close this sheet. Click outside or use the close button."
    title="Escape key unavailable"
  >
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">No close on Escape</Button>
    {/snippet}
  </Sheet>
</div>
