import type {
  AvatarGroupRecipeFn,
  AvatarRecipeFn,
  AvatarRecipeSlot,
  AvatarVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Avatar root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface AvatarRootContract extends AvatarVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue avatarRecipe
   */
  recipe?: AvatarRecipeFn;
}

/**
 * Avatar shorthand content contract. Compose with `AvatarRootContract` /
 * framework `AvatarRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface AvatarContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<AvatarRecipeSlot>;
  /** Fallback content when the image is missing or fails. */
  fallback?: unknown;
  /** Display name used for initials when fallback is omitted. */
  name?: string;
}

/**
 * Shared AvatarGroup root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface AvatarGroupRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue avatarGroupRecipe
   */
  recipe?: AvatarGroupRecipeFn;
}
