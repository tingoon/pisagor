import type {
  FormControlGroupShellRecipeFn,
  FormControlGroupShellVariantProps,
  FormControlRadioToggleRecipeFn,
  FormControlRadioToggleVariantProps,
  FormControlSeparatorRecipeFn,
  FormControlSeparatorVariantProps,
  FormControlShellRecipeFn,
  FormControlShellVariantProps,
  FormControlToggleRecipeFn,
  FormControlToggleVariantProps,
  FormControlZoneRecipeFn,
  FormControlZoneVariantProps,
} from "@pisagor/recipes";

/**
 * Shared FormControlShell root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface FormControlShellRootContract extends FormControlShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue formControlShellRecipe
   */
  recipe?: FormControlShellRecipeFn;
}

/**
 * Shared FormControlGroupShell root contract: visual variants and recipe
 * override. Used by compound roots; excludes host DOM attributes.
 */
export interface FormControlGroupShellRootContract extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue formControlGroupShellRecipe
   */
  recipe?: FormControlGroupShellRecipeFn;
}

/**
 * Shared FormControlToggle root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface FormControlToggleRootContract extends FormControlToggleVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue formControlToggleRecipe
   */
  recipe?: FormControlToggleRecipeFn;
}

/**
 * Shared FormControlRadioToggle root contract: visual variants and recipe
 * override. Used by compound roots; excludes host DOM attributes.
 */
export interface FormControlRadioToggleRootContract extends FormControlRadioToggleVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue formControlRadioToggleRecipe
   */
  recipe?: FormControlRadioToggleRecipeFn;
}

/**
 * Shared FormControlSeparator root contract: visual variants and recipe
 * override. Used by compound roots; excludes host DOM attributes.
 */
export interface FormControlSeparatorRootContract extends FormControlSeparatorVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue formControlSeparatorRecipe
   */
  recipe?: FormControlSeparatorRecipeFn;
}

/**
 * Shared FormControlZone root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface FormControlZoneRootContract extends FormControlZoneVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue formControlZoneRecipe
   */
  recipe?: FormControlZoneRecipeFn;
}
