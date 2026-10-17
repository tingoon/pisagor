<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { JsonTreeView } from "@pisagor/svelte";
  import { defaultData } from "./helpers";
</script>

<JsonTreeView.Root data={defaultData()} defaultExpandedDepth={1}>
  <JsonTreeView.Tree />
</JsonTreeView.Root>
