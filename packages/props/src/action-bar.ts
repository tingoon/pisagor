import type {
  ActionBarRecipeFn,
  ActionBarVariantProps,
} from "@pisagor/recipes";

/** ActionBar props. */
export interface ActionBarProps extends ActionBarVariantProps {
  /**
   * Style recipe override.
   * @defaultValue actionBarRecipe
   */
  recipe?: ActionBarRecipeFn;
}
