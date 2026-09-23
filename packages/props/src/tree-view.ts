import type {
  TreeViewBranchRecipeFn,
  TreeViewItemRecipeFn,
  TreeViewRecipeFn,
} from "@pisagor/recipes/tree-view";

/** TreeView props. */
export interface TreeViewProps {
  /**
   * Style recipe override.
   * @defaultValue treeViewRecipe
   */
  recipe?: TreeViewRecipeFn;
}

/** TreeViewBranch props. */
export interface TreeViewBranchProps {
  /**
   * Style recipe override.
   * @defaultValue treeViewBranchRecipe
   */
  recipe?: TreeViewBranchRecipeFn;
}

/** TreeViewItem props. */
export interface TreeViewItemProps {
  /**
   * Style recipe override.
   * @defaultValue treeViewItemRecipe
   */
  recipe?: TreeViewItemRecipeFn;
}
