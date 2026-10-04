<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte/json-tree-view";
import { mapSetData } from "./helpers";
</script>

<JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />
