import type { FloatingPanelRecipeFn } from "@pisagor/recipes";

/**
 * Shared FloatingPanel root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface FloatingPanelRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue floatingPanelRecipe
   */
  recipe?: FloatingPanelRecipeFn;
}
