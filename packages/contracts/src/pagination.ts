import type {
  PaginationRecipeFn,
  PaginationRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Pagination root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface PaginationRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue paginationRecipe
   */
  recipe?: PaginationRecipeFn;
}

/**
 * Pagination shorthand contract. Compose with `PaginationRootContract` /
 * framework `PaginationRootProps`.
 */
export interface PaginationContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<PaginationRecipeSlot>;
}
