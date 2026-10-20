import {
  treeViewBranchRecipe,
  treeViewItemRecipe,
  treeViewRecipe,
} from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  useStyles: useTreeViewStyles,
  withContext: withTreeViewContext,
  withProvider: withTreeViewProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewRecipe,
});

export const {
  withContext: withTreeViewBranchContext,
  withProvider: withTreeViewBranchProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewBranchRecipe,
});

export const {
  Context: TreeViewItemStylesContext,
  withProvider: withTreeViewItemProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewItemRecipe,
});

const defaultItemSlots = treeViewItemRecipe();

/** Item styles when inside `Item`, default item styles otherwise (branches). */
export function useTreeViewItemSlots() {
  const item = TreeViewItemStylesContext.get();

  return {
    get slots() {
      return item?.slots ?? defaultItemSlots;
    },
  };
}
