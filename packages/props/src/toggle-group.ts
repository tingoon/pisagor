import type {
  ToggleGroupRecipeFn,
  ToggleGroupVariantProps,
} from "@pisagor/recipes/toggle-group";

/** ToggleGroup props. */
export interface ToggleGroupProps extends ToggleGroupVariantProps {
  /**
   * Style recipe override.
   * @defaultValue toggleGroupRecipe
   */
  recipe?: ToggleGroupRecipeFn;
}
