import type {
  EmptyStateRecipeFn,
  EmptyStateRecipeSlot,
  EmptyStateVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared EmptyState root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface EmptyStateRootContract extends EmptyStateVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue emptyStateRecipe
   */
  recipe?: EmptyStateRecipeFn;
}

/**
 * EmptyState shorthand content contract. Compose with `EmptyStateRootContract`
 * / framework `EmptyStateRootProps` — do not extend the root here so root
 * fields are not applied twice. Content fields stay `unknown` so consumers can
 * narrow them.
 */
export interface EmptyStateContract {
  /** Action buttons or links. */
  actions?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<EmptyStateRecipeSlot>;
  /** Supporting copy. */
  description?: unknown;
  /** Icon or illustration shown above the title. */
  media?: unknown;
  /** Primary heading. */
  title?: unknown;
}
