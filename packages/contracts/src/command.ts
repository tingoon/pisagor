import type { CommandRecipeFn, CommandRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface CommandPresetItem {
  value: string;
  /** Item label. */
  label: unknown;
  /** Leading icon. */
  icon?: unknown;
  group?: string;
  shortcut?: string;
}

/**
 * Shared Command root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CommandRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue commandRecipe
   */
  recipe?: CommandRecipeFn;
}

/**
 * Command shorthand content contract. Compose with `CommandRootContract` /
 * framework `CommandRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface CommandContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<CommandRecipeSlot>;
  /** Empty-state content when there are no matches. */
  emptyText?: unknown;
  /** Shorthand items. */
  items?: CommandPresetItem[];
  /** Placeholder for the search input. */
  placeholder?: unknown;
}

/**
 * CommandDialog shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface CommandDialogContract {
  /** Supporting copy. */
  description?: unknown;
  /** Dialog title. */
  title?: unknown;
}
