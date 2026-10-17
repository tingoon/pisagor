<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Switch } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Switch variant="primary" />
  <Switch variant="secondary" />
</div>
