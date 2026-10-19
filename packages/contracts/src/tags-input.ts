import type {
  FormControlGroupShellVariantProps,
  TagsInputItemRecipeFn,
  TagsInputRecipeFn,
  TagsInputRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared TagsInput root contract: visual variants and recipe override. Shell
 * variants from `formControlGroupShellRecipe`. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface TagsInputRootContract extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tagsInputRecipe
   */
  recipe?: TagsInputRecipeFn;
}

/**
 * Shared TagsInputItem root contract: visual variants and recipe override.
 * Shell variants from `formControlGroupShellRecipe`. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TagsInputItemRootContract extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tagsInputItemRecipe
   */
  recipe?: TagsInputItemRecipeFn;
}

/**
 * TagsInput shorthand contract. Compose with `TagsInputRootContract` /
 * framework `TagsInputRootProps`.
 */
export interface TagsInputContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TagsInputRecipeSlot>;
}
