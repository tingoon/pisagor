import { JsonTreeView } from "..";
import { expandDepthData } from "./helpers";

export function ExpandDepth() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="mb-2 font-medium text-foreground text-sm">
          defaultExpandedDepth={0} (all collapsed)
        </p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={0} />
      </div>
      <div>
        <p className="mb-2 font-medium text-foreground text-sm">defaultExpandedDepth={2}</p>
        <JsonTreeView data={expandDepthData()} defaultExpandedDepth={2} />
      </div>
    </div>
  );
}
