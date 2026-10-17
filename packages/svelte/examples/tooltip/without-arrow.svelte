<script module lang="ts">
  import source from "./without-arrow.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Tooltip } from "@pisagor/svelte";
</script>

<Tooltip content="Saved 2 minutes ago" showArrow={false}>
  <Button variant="outline">Status</Button>
</Tooltip>
