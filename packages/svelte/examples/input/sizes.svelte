<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Input } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <Input placeholder="Small" size="sm" />
  <Input placeholder="Medium" size="md" />
  <Input placeholder="Large" size="lg" />
</div>
