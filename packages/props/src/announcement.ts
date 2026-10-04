import type { AnnouncementRecipeFn } from "@pisagor/recipes";

/** Announcement props. */
export interface AnnouncementProps {
  /**
   * Style recipe override.
   * @defaultValue announcementRecipe
   */
  recipe?: AnnouncementRecipeFn;
}
