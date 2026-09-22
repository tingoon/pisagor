import { JsonTreeView } from "..";
import { dataTypesData } from "./helpers";

export function DataTypes() {
  return <JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />;
}
