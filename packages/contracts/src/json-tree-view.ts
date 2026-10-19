import type {
  JsonTreeViewRecipeFn,
  JsonTreeViewRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared JsonTreeView root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface JsonTreeViewRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue jsonTreeViewRecipe
   */
  recipe?: JsonTreeViewRecipeFn;
}

/**
 * JsonTreeView shorthand content contract. Compose with
 * `JsonTreeViewRootContract` / framework `JsonTreeViewRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface JsonTreeViewContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<JsonTreeViewRecipeSlot>;
}
