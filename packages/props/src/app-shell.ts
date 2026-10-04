import type { AppShellRecipeFn } from "@pisagor/recipes";

/** AppShell props. */
export interface AppShellProps {
  /**
   * Style recipe override.
   * @defaultValue appShellRecipe
   */
  recipe?: AppShellRecipeFn;
}
