import AnnouncementShorthand from "./announcement.svelte";
import AnnouncementRoot from "./announcement-root.svelte";
import AnnouncementTitle from "./announcement-title.svelte";

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
