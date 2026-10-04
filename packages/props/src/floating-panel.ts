import type { FloatingPanelRecipeFn } from "@pisagor/recipes";

/** FloatingPanel props. */
export interface FloatingPanelProps {
  /**
   * Style recipe override.
   * @defaultValue floatingPanelRecipe
   */
  recipe?: FloatingPanelRecipeFn;
}
