import { JsonTreeView } from "@pisagor/react";
import { dataTypesData } from "./helpers";

export function DataTypes() {
  return <JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />;
}
