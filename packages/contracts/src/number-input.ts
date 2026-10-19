import type {
  NumberInputRecipeFn,
  NumberInputRecipeSlot,
  NumberInputVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared NumberInput root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface NumberInputRootContract extends NumberInputVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue numberInputRecipe
   */
  recipe?: NumberInputRecipeFn;
}

/**
 * NumberInput shorthand contract. Compose with `NumberInputRootContract` /
 * framework `NumberInputRootProps`.
 */
export interface NumberInputContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<NumberInputRecipeSlot>;
}
