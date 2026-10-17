<script module lang="ts">
  import source from "./empty.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Listbox } from "@pisagor/svelte";
</script>

<Listbox emptyText="No frameworks found." items={[]} />
