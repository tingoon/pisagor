import { AnnouncementRoot, AnnouncementShorthand, AnnouncementTitle } from "./announcement";

export type { AnnouncementProps } from "./announcement";

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
