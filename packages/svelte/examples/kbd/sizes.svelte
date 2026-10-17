<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Kbd } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Kbd size="sm">K</Kbd>
  <Kbd size="md">K</Kbd>
  <Kbd size="lg">K</Kbd>
</div>
