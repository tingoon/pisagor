import { JsonTreeView } from "@pisagor/react";
import { defaultData } from "./helpers";

export function Default() {
  return <JsonTreeView data={defaultData()} defaultExpandedDepth={1} />;
}
