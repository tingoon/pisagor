import type { AnnouncementRecipeFn } from "@pisagor/recipes/announcement";

/** Announcement props. */
export interface AnnouncementProps {
  /**
   * Style recipe override.
   * @defaultValue announcementRecipe
   */
  recipe?: AnnouncementRecipeFn;
}
