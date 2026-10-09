import {
  treeViewBranchRecipe,
  treeViewItemRecipe,
  treeViewRecipe,
} from "@pisagor/recipes";
import type { Component } from "svelte";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useTreeViewStyles,
  withContext: withTreeViewContext,
  withProvider: withTreeViewProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewRecipe,
});

export const {
  Context: TreeViewBranchStylesContext,
  useStyles: useTreeViewBranch,
  withContext: withTreeViewBranchContext,
  withProvider: withTreeViewBranchProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewBranchRecipe,
});

export const {
  Context: TreeViewItemStylesContext,
  withContext: withTreeViewItemContext,
  withProvider: withTreeViewItemProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewItemRecipe,
});

export interface TreeViewIconsValue {
  fileIcons?: Record<string, Component | null>;
}

const iconsCtx = createContext("TreeViewIcons")<TreeViewIconsValue>({
  defaultValue: {},
  strict: false,
});
export const setTreeViewIconsContext = iconsCtx.setContext;
export const useTreeViewIcons = iconsCtx.getContext;

export function useTreeView() {
  const styles = useTreeViewStyles();
  const icons = useTreeViewIcons() ?? {};
  return {
    get fileIcons() {
      return icons.fileIcons;
    },
    get slots() {
      return styles.slots;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function useTreeViewItem() {
  return TreeViewItemStylesContext.get();
}

export function setTreeViewContext(
  value: TreeViewIconsValue & {
    slots: ReturnType<typeof treeViewRecipe>;
  },
) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setTreeViewIconsContext({
    get fileIcons() {
      return value.fileIcons;
    },
  });
}

export function setTreeViewBranchContext(value: {
  slots: ReturnType<typeof treeViewBranchRecipe>;
}) {
  TreeViewBranchStylesContext.set({
    get slots() {
      return value.slots;
    },
  });
}

export function setTreeViewItemContext(value: {
  slots: ReturnType<typeof treeViewItemRecipe>;
}) {
  TreeViewItemStylesContext.set({
    get slots() {
      return value.slots;
    },
  });
}
