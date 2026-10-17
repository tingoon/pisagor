<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Kbd } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Kbd variant="default">K</Kbd>
  <Kbd.Group>
    <Kbd variant="outline">K</Kbd>
    <Kbd variant="outline">⌘</Kbd>
    <Kbd variant="outline">⌃</Kbd>
  </Kbd.Group>
</div>
