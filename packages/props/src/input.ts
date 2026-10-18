import type {
  InputRecipeSlot,
  InputRootRecipeFn,
  InputRootVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Input root contract: visual variants and root recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface InputRootContract extends InputRootVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue inputRootRecipe
   */
  recipe?: InputRootRecipeFn;
}

/**
 * Input field shorthand content contract. Compose with `InputRootContract` /
 * framework `InputRootProps` — do not extend the root here so root fields are
 * not applied twice.
 */
export interface InputContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<InputRecipeSlot>;
}
