/** @jsxImportSource solid-js */
import { JsonTreeView } from "@pisagor/solid";
import { dataTypesData } from "./helpers";

export function DataTypes() {
  return <JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />;
}
