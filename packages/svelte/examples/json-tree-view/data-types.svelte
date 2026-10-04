<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte/json-tree-view";
import { dataTypesData } from "./helpers";
</script>

<JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />
