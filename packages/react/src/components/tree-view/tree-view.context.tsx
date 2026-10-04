import type {
  TreeViewBranchRecipe,
  TreeViewItemRecipe,
  TreeViewRecipe,
} from "@pisagor/recipes";

import type { JSX } from "react";
import { createContext } from "../../utils";

export interface TreeViewContextProps {
  /** Custom extension icons */
  fileIcons?: Record<string, JSX.ElementType | null>;
}

interface TreeViewContextValue extends TreeViewContextProps {
  slots: TreeViewRecipe;
}

interface TreeViewBranchContextValue {
  slots: TreeViewBranchRecipe;
}

interface TreeViewItemContextValue {
  slots: TreeViewItemRecipe;
}

export const { TreeViewContext, useTreeView } =
  createContext("TreeView")<TreeViewContextValue>();

export const { TreeViewBranchContext, useTreeViewBranch } =
  createContext("TreeViewBranch")<TreeViewBranchContextValue>();

export const { TreeViewItemContext, useTreeViewItem } = createContext(
  "TreeViewItem",
)<TreeViewItemContextValue>({ strict: false });
