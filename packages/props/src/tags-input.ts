import type {
  FormControlGroupShellVariantProps,
  TagsInputItemRecipeFn,
  TagsInputRecipeFn,
} from "@pisagor/recipes";

/** TagsInput props. Shell variants from `formControlGroupShellRecipe`. */
export interface TagsInputProps extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tagsInputRecipe
   */
  recipe?: TagsInputRecipeFn;
}

/** TagsInputItem props. */
export interface TagsInputItemProps extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tagsInputItemRecipe
   */
  recipe?: TagsInputItemRecipeFn;
}
