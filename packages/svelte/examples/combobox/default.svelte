<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Combobox } from "@pisagor/svelte";
</script>

<Combobox clearable items={["Apple", "Banana", "Orange"]} />
