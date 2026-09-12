import AnnouncementShorthand from "./announcement.astro";
import AnnouncementRoot from "./announcement-root.astro";
import AnnouncementTitle from "./announcement-title.astro";

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
