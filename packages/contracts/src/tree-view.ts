import type {
  TreeViewBranchRecipeFn,
  TreeViewBranchRecipeSlot,
  TreeViewItemRecipeFn,
  TreeViewItemRecipeSlot,
  TreeViewRecipeFn,
  TreeViewRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

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

/**
 * TreeView shorthand contract. Compose with `TreeViewRootContract` / framework
 * `TreeViewRootProps`.
 */
export interface TreeViewContract {
  /** Per-slot class name overrides for each branch. */
  branchClassNames?: SlotClassNames<TreeViewBranchRecipeSlot>;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TreeViewRecipeSlot>;
  /** Per-slot class name overrides for item parts (icons, text, checkbox). */
  itemClassNames?: SlotClassNames<TreeViewItemRecipeSlot>;
}
