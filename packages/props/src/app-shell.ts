import type { AppShellRecipeFn } from "@pisagor/recipes/app-shell";

/** AppShell props. */
export interface AppShellProps {
  /**
   * Style recipe override.
   * @defaultValue appShellRecipe
   */
  recipe?: AppShellRecipeFn;
}
