import type {
  RadioGroupItemRecipeFn,
  RadioGroupRecipeFn,
} from "@pisagor/recipes/radio-group";

/** RadioGroup props. */
export interface RadioGroupProps {
  /**
   * Style recipe override.
   * @defaultValue radioGroupRecipe
   */
  recipe?: RadioGroupRecipeFn;
}

/** RadioGroupItem props. */
export interface RadioGroupItemProps {
  /**
   * Style recipe override.
   * @defaultValue radioGroupItemRecipe
   */
  recipe?: RadioGroupItemRecipeFn;
}
