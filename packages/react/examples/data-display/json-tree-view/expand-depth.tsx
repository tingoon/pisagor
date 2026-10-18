import { JsonTreeView } from "@pisagor/react";
import { expandDepthData } from "./helpers";

export function ExpandDepth() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-foreground mb-2 text-sm font-medium">
          defaultExpandedDepth={0} (all collapsed)
        </p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={0} />
      </div>
      <div>
        <p className="text-foreground mb-2 text-sm font-medium">
          defaultExpandedDepth={2}
        </p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={2} />
      </div>
    </div>
  );
}
