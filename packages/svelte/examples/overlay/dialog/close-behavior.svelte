<script lang="ts">
  import { Button, Dialog } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap justify-center gap-2">
  <Dialog
    closeOnInteractOutside={false}
    description="Clicking outside does not close this dialog. Press ESC or use the button to close."
    size="sm"
    title="Stays on outside click"
  >
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">No close on outside click</Button>
    {/snippet}
  </Dialog>
  <Dialog
    closeOnEscape={false}
    description="Pressing Escape does not close this dialog. Click outside or use the close button."
    size="sm"
    title="Escape key unavailable"
  >
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">No close on Escape</Button>
    {/snippet}
  </Dialog>
</div>
