import type { AppShellRecipeFn } from "@pisagor/recipes";

/**
 * Shared AppShell root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface AppShellRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue appShellRecipe
   */
  recipe?: AppShellRecipeFn;
}

/**
 * AppShell panel/inspector trigger shorthand content contract. Content fields
 * stay `unknown` so consumers can narrow them.
 */
export interface AppShellTriggerContract {
  /** Content shown when the region is closed / off. */
  off?: unknown;
  /** Content shown when the region is open / on. */
  on?: unknown;
}
