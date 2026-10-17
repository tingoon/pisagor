import source from "./map-set.tsx?raw";
import { JsonTreeView } from "@pisagor/react";
import { mapSetData } from "./helpers";

export function MapSet() {
  return <JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />;
}

export { source as MapSetSource };
