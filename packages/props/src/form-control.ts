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
} from "@pisagor/recipes/form-control";

/** FormControlShell props. */
export interface FormControlShellProps extends FormControlShellVariantProps {
  /**
   * Style recipe override.
   * @defaultValue formControlShellRecipe
   */
  recipe?: FormControlShellRecipeFn;
}

/** FormControlGroupShell props. */
export interface FormControlGroupShellProps extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   * @defaultValue formControlGroupShellRecipe
   */
  recipe?: FormControlGroupShellRecipeFn;
}

/** FormControlToggle props. */
export interface FormControlToggleProps extends FormControlToggleVariantProps {
  /**
   * Style recipe override.
   * @defaultValue formControlToggleRecipe
   */
  recipe?: FormControlToggleRecipeFn;
}

/** FormControlRadioToggle props. */
export interface FormControlRadioToggleProps extends FormControlRadioToggleVariantProps {
  /**
   * Style recipe override.
   * @defaultValue formControlRadioToggleRecipe
   */
  recipe?: FormControlRadioToggleRecipeFn;
}

/** FormControlSeparator props. */
export interface FormControlSeparatorProps extends FormControlSeparatorVariantProps {
  /**
   * Style recipe override.
   * @defaultValue formControlSeparatorRecipe
   */
  recipe?: FormControlSeparatorRecipeFn;
}

/** FormControlZone props. */
export interface FormControlZoneProps extends FormControlZoneVariantProps {
  /**
   * Style recipe override.
   * @defaultValue formControlZoneRecipe
   */
  recipe?: FormControlZoneRecipeFn;
}
