<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte";
import { dataTypesData } from "./helpers";
</script>

<JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />
