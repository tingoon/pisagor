import type { FloatingPanelRecipeFn } from "@pisagor/recipes/floating-panel";

/** FloatingPanel props. */
export interface FloatingPanelProps {
  /**
   * Style recipe override.
   * @defaultValue floatingPanelRecipe
   */
  recipe?: FloatingPanelRecipeFn;
}
