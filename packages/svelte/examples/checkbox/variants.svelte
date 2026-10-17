<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Checkbox } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Checkbox variant="primary" />
  <Checkbox variant="secondary" />
</div>
