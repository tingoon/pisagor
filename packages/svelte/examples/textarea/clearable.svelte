<script module lang="ts">
  import source from "./clearable.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Textarea } from "@pisagor/svelte";

  let value = $state("");
</script>

<Textarea
  clearable
  onValueChange={(next) => (value = next)}
  placeholder="Type to clear"
  {value}
/>
