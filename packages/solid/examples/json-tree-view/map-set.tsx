/** @jsxImportSource solid-js */
import { JsonTreeView } from "@pisagor/solid";
import { mapSetData } from "./helpers";

export function MapSet() {
  return <JsonTreeView data={mapSetData()} defaultExpandedDepth={1} />;
}
