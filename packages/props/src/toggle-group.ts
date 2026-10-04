import type {
  ToggleGroupRecipeFn,
  ToggleGroupVariantProps,
} from "@pisagor/recipes";

/** ToggleGroup props. */
export interface ToggleGroupProps extends ToggleGroupVariantProps {
  /**
   * Style recipe override.
   * @defaultValue toggleGroupRecipe
   */
  recipe?: ToggleGroupRecipeFn;
}
