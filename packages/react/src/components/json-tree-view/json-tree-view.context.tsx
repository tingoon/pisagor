import type { JsonTreeViewVariants } from "@pisagor/styles/ui/json-tree-view";
import { createContext } from "../../utils";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewVariants;
}

export const { JsonTreeViewContext, useJsonTreeView } = createContext<JsonTreeViewContextValue>()({
  name: "JsonTreeView",
});
