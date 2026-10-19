import type {
  FormControlGroupShellVariantProps,
  NumberInputRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared NumberInput root contract: visual variants and recipe override. Shell
 * variants from `formControlGroupShellRecipe`. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface NumberInputRootContract extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue numberInputRecipe
   */
  recipe?: NumberInputRecipeFn;
}
