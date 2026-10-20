import type {
  CollapsibleRecipeFn,
  CollapsibleRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Collapsible root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CollapsibleRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue collapsibleRecipe
   */
  recipe?: CollapsibleRecipeFn;
}

/**
 * Collapsible shorthand contract. Compose with `CollapsibleRootContract` /
 * framework `CollapsibleRootProps`.
 */
export interface CollapsibleContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<CollapsibleRecipeSlot>;
}
