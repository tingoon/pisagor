import { JsonTreeView } from "@pisagor/react/json-tree-view";
import { defaultData } from "./helpers";

export function Default() {
  return <JsonTreeView data={defaultData()} defaultExpandedDepth={1} />;
}
