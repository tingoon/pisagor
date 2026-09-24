import type {
  TreeViewBranchRecipe,
  TreeViewItemRecipe,
  TreeViewRecipe,
} from "@pisagor/recipes/tree-view";
import type { Component } from "svelte";
import { createContext } from "../../utils/create-context";

export interface TreeViewContextProps {
  fileIcons?: Record<string, Component | null>;
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

const root = createContext<TreeViewContextValue>({ name: "TreeView" });
const branch = createContext<TreeViewBranchContextValue>({ name: "TreeViewBranch" });
const item = createContext<TreeViewItemContextValue | undefined>({
  defaultValue: undefined,
  name: "TreeViewItem",
  strict: false,
});

export const setTreeViewContext = root.setContext;
export const useTreeView = root.getContext;
export const setTreeViewBranchContext = branch.setContext;
export const useTreeViewBranch = branch.getContext;
export const setTreeViewItemContext = item.setContext;
export const useTreeViewItem = item.getContext;
