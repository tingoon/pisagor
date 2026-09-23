import type { TagsInputItemRecipeFn, TagsInputRecipeFn } from "@pisagor/recipes/tags-input";

/** TagsInput props. */
export interface TagsInputProps {
  /**
   * Style recipe override.
   * @defaultValue tagsInputRecipe
   */
  recipe?: TagsInputRecipeFn;
}

/** TagsInputItem props. */
export interface TagsInputItemProps {
  /**
   * Style recipe override.
   * @defaultValue tagsInputItemRecipe
   */
  recipe?: TagsInputItemRecipeFn;
}
