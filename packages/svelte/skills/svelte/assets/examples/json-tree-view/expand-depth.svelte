<script lang="ts">
import { JsonTreeView } from "@pisagor/svelte/json-tree-view";
import { expandDepthData } from "./helpers";
</script>

<div class="flex flex-col gap-2">
      <div>
        <p class="mb-2 font-medium text-foreground text-sm">
          defaultExpandedDepth={0} (all collapsed)
        </p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={0} />
      </div>
      <div>
        <p class="mb-2 font-medium text-foreground text-sm">
          defaultExpandedDepth={2}
        </p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={2} />
      </div>
    </div>
