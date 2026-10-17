<script module lang="ts">
  import source from "./expand-depth.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { JsonTreeView } from "@pisagor/svelte";
  import { expandDepthData } from "./helpers";
</script>

<div class="flex flex-col gap-2">
  <div>
    <p class="text-foreground mb-2 text-sm font-medium">
      defaultExpandedDepth={0}
      (all collapsed)
    </p>
    <JsonTreeView data={expandDepthData()} defaultExpandedDepth={0} />
  </div>
  <div>
    <p class="text-foreground mb-2 text-sm font-medium">
      defaultExpandedDepth={2}
    </p>
    <JsonTreeView data={expandDepthData()} defaultExpandedDepth={2} />
  </div>
</div>
