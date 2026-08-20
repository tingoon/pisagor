import type { JSX } from "react";
import { createContext } from "../../utils";

export interface TreeViewContextProps {
  /** Custom extension icons */
  fileIcons?: Record<string, JSX.ElementType | null>;
}

export const { TreeViewContext, useTreeView } = createContext<TreeViewContextProps>()({
  name: "TreeView",
});
