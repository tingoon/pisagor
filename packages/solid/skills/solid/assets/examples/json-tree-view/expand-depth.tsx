/** @jsxImportSource solid-js */
import { JsonTreeView } from "@pisagor/solid/json-tree-view";
import { expandDepthData } from "./helpers";

export function ExpandDepth() {
  return (
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
  );
}
