import type {
  CircularSliderRecipeFn,
  CircularSliderRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared CircularSlider root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CircularSliderRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue circularSliderRecipe
   */
  recipe?: CircularSliderRecipeFn;
}

/**
 * CircularSlider shorthand contract. Compose with `CircularSliderRootContract`
 * / framework `CircularSliderRootProps`.
 */
export interface CircularSliderContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<CircularSliderRecipeSlot>;
}
