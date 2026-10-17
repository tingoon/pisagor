<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <NumberInput defaultValue="10" size="sm" />
  <NumberInput defaultValue="10" size="md" />
  <NumberInput defaultValue="10" size="lg" />
</div>
