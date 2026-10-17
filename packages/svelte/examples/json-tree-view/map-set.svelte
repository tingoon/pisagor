<script module lang="ts">
  import source from "./map-set.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { JsonTreeView } from "@pisagor/svelte";
  import { mapSetData } from "./helpers";
</script>

<JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />
