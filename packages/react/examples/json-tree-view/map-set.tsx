import { JsonTreeView } from "@pisagor/react/json-tree-view";
import { mapSetData } from "./helpers";

export function MapSet() {
  return <JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />;
}
