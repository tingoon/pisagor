import type {
  TreeViewBranchRecipeFn,
  TreeViewItemRecipeFn,
  TreeViewRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared TreeView root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TreeViewRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue treeViewRecipe
   */
  recipe?: TreeViewRecipeFn;
}

/**
 * Shared TreeViewBranch root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TreeViewBranchRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue treeViewBranchRecipe
   */
  recipe?: TreeViewBranchRecipeFn;
}

/**
 * Shared TreeViewItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TreeViewItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue treeViewItemRecipe
   */
  recipe?: TreeViewItemRecipeFn;
}
