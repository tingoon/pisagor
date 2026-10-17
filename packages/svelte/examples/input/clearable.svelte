<script module lang="ts">
  import source from "./clearable.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Input } from "@pisagor/svelte";

  let value = $state("Hello world");
</script>

<Input
  clearable
  onValueChange={(next) => (value = next)}
  placeholder="Type to search..."
  {value}
/>
