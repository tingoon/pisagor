import type {
  TreeViewBranchRecipe,
  TreeViewItemRecipe,
  TreeViewRecipe,
} from "@pisagor/recipes";
import type { Component } from "solid-js";
import { createContext } from "../../utils";

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

export const { TreeViewContext, useTreeView } =
  createContext("TreeView")<TreeViewContextValue>();

export const { TreeViewBranchContext, useTreeViewBranch } =
  createContext("TreeViewBranch")<TreeViewBranchContextValue>();

export const { TreeViewItemContext, useTreeViewItem } = createContext(
  "TreeViewItem",
)<TreeViewItemContextValue>({ strict: false });
