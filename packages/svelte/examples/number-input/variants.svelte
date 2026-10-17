<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <NumberInput defaultValue="1" variant="primary" />
  <NumberInput defaultValue="1" variant="secondary" />
</div>
