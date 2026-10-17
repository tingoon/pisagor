<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Dialog } from "@pisagor/svelte";
</script>

<Dialog description="This is a dialog description." title="Dialog title">
  {#snippet trigger()}
    <Button>Open</Button>
  {/snippet}
  <p class="text-sm">Dialog body</p>
</Dialog>
