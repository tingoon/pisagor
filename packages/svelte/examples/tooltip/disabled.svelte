<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Tooltip } from "@pisagor/svelte";
</script>

<Tooltip>
  {#snippet content()}
    <p>You can still show a tooltip on an unavailable element</p>
  {/snippet}
  <Button disabled variant="outline">Unavailable</Button>
</Tooltip>
