<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Select } from "@pisagor/svelte";
</script>

<Select items={["Apple", "Banana", "Orange"]} placeholder="Pick a fruit" />
