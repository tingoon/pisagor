import type {
  StepsItemRecipeFn,
  StepsRecipeFn,
  StepsRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Steps root contract: recipe override. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface StepsRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue stepsRecipe
   */
  recipe?: StepsRecipeFn;
}

/**
 * Shared StepsItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface StepsItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue stepsItemRecipe
   */
  recipe?: StepsItemRecipeFn;
}

/** One step in the Steps shorthand `items` list. */
export interface StepsPresetItem {
  /** Stable key; defaults to the index. */
  value?: string;
  title?: unknown;
  description?: unknown;
  content?: unknown;
  /** Indicator content; defaults to the step number. */
  icon?: unknown;
}

/**
 * Steps shorthand contract. Compose with `StepsRootContract` / framework
 * `StepsRootProps`.
 */
export interface StepsContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<StepsRecipeSlot>;
}
