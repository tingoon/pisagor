import { JsonTreeView } from "@pisagor/react";
import { mapSetData } from "./helpers";

export function MapSet() {
  return <JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />;
}
