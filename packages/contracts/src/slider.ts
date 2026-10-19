import type { SliderRecipeFn, SliderRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Slider root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SliderRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue sliderRecipe
   */
  recipe?: SliderRecipeFn;
}

/**
 * Slider shorthand content contract. Compose with `SliderRootContract` /
 * framework `SliderRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface SliderContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<SliderRecipeSlot>;
  /** Optional label shown with the slider. */
  label?: unknown;
}
