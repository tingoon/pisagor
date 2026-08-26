import type { AnnouncementVariants } from "@pisagor/styles/ui/announcement";
import { createContext } from "../../utils";

interface AnnouncementContextValue {
  slots: AnnouncementVariants;
}

export const { AnnouncementContext, useAnnouncement } = createContext<AnnouncementContextValue>()({
  name: "Announcement",
});
