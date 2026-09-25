import type {
  TreeViewBranchRecipe,
  TreeViewItemRecipe,
  TreeViewRecipe,
} from "@pisagor/recipes/tree-view";
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
  createContext<TreeViewContextValue>()({
    name: "TreeView",
  });

export const { TreeViewBranchContext, useTreeViewBranch } =
  createContext<TreeViewBranchContextValue>()({
    name: "TreeViewBranch",
  });

export const { TreeViewItemContext, useTreeViewItem } =
  createContext<TreeViewItemContextValue>()({
    name: "TreeViewItem",
    strict: false,
  });
