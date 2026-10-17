<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Autocomplete } from "@pisagor/svelte";
</script>

<Autocomplete
  clearable
  items={["Apple", "Banana", "Cherry"]}
  placeholder="Search…"
/>
