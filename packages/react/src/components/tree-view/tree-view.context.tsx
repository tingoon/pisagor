import type { JSX } from "react";
import { createContext } from "../../utils";

export interface TreeViewContextProps {
  /** Custom extension icons */
  fileIcons?: Record<string, JSX.ElementType | null>;
}

const [TreeViewContext, useTreeViewLocalContext] = createContext<TreeViewContextProps>({
  name: "TreeViewLocal",
});

export { TreeViewContext, useTreeViewLocalContext };
