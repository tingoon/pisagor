<script lang="ts">
  import { Button, Dialog } from "@pisagor/svelte";
</script>

<Dialog
  description="You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop."
  showCloseButton={false}
  title="No close button"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
</Dialog>
