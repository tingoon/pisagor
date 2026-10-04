import type {
  TreeViewBranchRecipe,
  TreeViewItemRecipe,
  TreeViewRecipe,
} from "@pisagor/recipes";
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

const root = createContext("TreeView")<TreeViewContextValue>();
const branch = createContext("TreeViewBranch")<TreeViewBranchContextValue>();
const item = createContext("TreeViewItem")<
  TreeViewItemContextValue | undefined
>({
  defaultValue: undefined,
  strict: false,
});

export const setTreeViewContext = root.setContext;
export const useTreeView = root.getContext;
export const setTreeViewBranchContext = branch.setContext;
export const useTreeViewBranch = branch.getContext;
export const setTreeViewItemContext = item.setContext;
export const useTreeViewItem = item.getContext;
