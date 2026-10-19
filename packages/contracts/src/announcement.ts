import type {
  AnnouncementRecipeFn,
  AnnouncementRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Announcement root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface AnnouncementRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue announcementRecipe
   */
  recipe?: AnnouncementRecipeFn;
}

/**
 * Announcement shorthand content contract. Compose with
 * `AnnouncementRootContract` / framework `AnnouncementRootProps` — do not
 * extend the root here so root fields are not applied twice. Content fields
 * stay `unknown` so consumers can narrow them.
 */
export interface AnnouncementContract {
  /** Optional badge or label rendered before the title. */
  badge?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<AnnouncementRecipeSlot>;
  /** Title content. */
  title?: unknown;
}
