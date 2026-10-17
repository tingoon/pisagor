<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileInput } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <FileInput variant="primary" />
  <FileInput variant="secondary" />
</div>
