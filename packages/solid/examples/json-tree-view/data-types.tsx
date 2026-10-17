import source from "./data-types.tsx?raw";
import { JsonTreeView } from "@pisagor/solid";
import { dataTypesData } from "./helpers";

export function DataTypes() {
  return <JsonTreeView data={dataTypesData()} defaultExpandedDepth={2} />;
}

export { source as DataTypesSource };
