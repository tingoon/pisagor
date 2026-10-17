<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Toggle } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Toggle variant="ghost">Default</Toggle>
  <Toggle variant="outline">Outline</Toggle>
</div>
