import source from "./default.tsx?raw";
import { JsonTreeView } from "@pisagor/react";
import { defaultData } from "./helpers";

export function Default() {
  return <JsonTreeView data={defaultData()} defaultExpandedDepth={1} />;
}

export { source as DefaultSource };
