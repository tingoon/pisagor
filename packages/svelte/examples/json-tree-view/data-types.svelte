<script module lang="ts">
  import source from "./data-types.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { JsonTreeView } from "@pisagor/svelte";
  import { dataTypesData } from "./helpers";
</script>

<JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />
