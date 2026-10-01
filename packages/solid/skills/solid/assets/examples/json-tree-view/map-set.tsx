/** @jsxImportSource solid-js */
import { JsonTreeView } from "@pisagor/solid/json-tree-view";
import { mapSetData } from "./helpers";

export function MapSet() {
  return <JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />;
}
