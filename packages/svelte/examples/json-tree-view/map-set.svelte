<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte";
import { mapSetData } from "./helpers";
</script>

<JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />
