<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Tooltip } from "@pisagor/svelte";
</script>

<Tooltip content="Bold">
  <Button aria-label="Bold" size="icon-md" variant="outline">B</Button>
</Tooltip>
