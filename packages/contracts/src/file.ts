import type {
  FileRecipeFn,
  FileRecipeSlot,
  FileVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared File root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface FileRootContract extends FileVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue fileRecipe
   */
  recipe?: FileRecipeFn;
}

/**
 * File shorthand content contract. Compose with `FileRootContract` / framework
 * `FileRootProps` — do not extend the root here so root fields are not applied
 * twice. Content fields stay `unknown` so consumers can narrow them.
 */
export interface FileContract {
  /** Trailing actions (download, remove, …). */
  actions?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<FileRecipeSlot>;
  /** Leading media; defaults to a file icon. */
  media?: unknown;
  /** Optional subtitle (type, modified date, etc.). */
  meta?: unknown;
  /** Display name for the file. */
  name: unknown;
  /** Size in bytes; rendered with byte formatting when set. */
  size?: number;
}
