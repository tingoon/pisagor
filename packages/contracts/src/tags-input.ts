import type {
  FormControlGroupShellVariantProps,
  TagsInputItemRecipeFn,
  TagsInputRecipeFn,
} from "@pisagor/recipes";

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
