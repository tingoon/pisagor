import type {
  EditableRecipeFn,
  EditableRecipeSlot,
  EditableVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Editable root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface EditableRootContract extends EditableVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue editableRecipe
   */
  recipe?: EditableRecipeFn;
}

/**
 * Editable shorthand contract. Compose with `EditableRootContract` / framework
 * `EditableRootProps`.
 */
export interface EditableContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<EditableRecipeSlot>;
}
