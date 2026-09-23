import { JsonTreeView } from "..";
import { mapSetData } from "./helpers";

export function MapSet() {
  return <JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />;
}
