import type { AnnouncementVariants } from "@pisagor/recipes/announcement";
import { createContext } from "../../internal/utils";

interface AnnouncementContextValue {
  slots: AnnouncementVariants;
}

export const { AnnouncementContext, useAnnouncement } = createContext<AnnouncementContextValue>()({
  name: "Announcement",
});
