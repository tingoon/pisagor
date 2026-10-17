<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Textarea } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <Textarea placeholder="Primary" variant="primary" />
  <Textarea placeholder="Secondary" variant="secondary" />
</div>
