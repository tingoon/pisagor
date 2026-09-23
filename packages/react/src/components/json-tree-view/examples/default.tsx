import { JsonTreeView } from "..";
import { defaultData } from "./helpers";

export function Default() {
  return <JsonTreeView data={defaultData()} defaultExpandedDepth={1} />;
}
