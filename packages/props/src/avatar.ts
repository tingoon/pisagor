import type {
  AvatarGroupRecipeFn,
  AvatarRecipeFn,
  AvatarVariantProps,
} from "@pisagor/recipes/avatar";

/** Avatar props. */
export interface AvatarProps extends AvatarVariantProps {
  /**
   * Style recipe override.
   * @defaultValue avatarRecipe
   */
  recipe?: AvatarRecipeFn;
}

/** AvatarGroup props. */
export interface AvatarGroupProps {
  /**
   * Style recipe override.
   * @defaultValue avatarGroupRecipe
   */
  recipe?: AvatarGroupRecipeFn;
}
