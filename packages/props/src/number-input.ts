import type {
  FormControlGroupShellVariantProps,
  NumberInputRecipeFn,
} from "@pisagor/recipes";

/** NumberInput props. Shell variants from `formControlGroupShellRecipe`. */
export interface NumberInputProps extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue numberInputRecipe
   */
  recipe?: NumberInputRecipeFn;
}
