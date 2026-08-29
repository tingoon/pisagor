import type { AnnouncementSlots } from "@pisagor/recipes/announcement";
import { createContext } from "../../internal/utils";

interface AnnouncementContextValue {
  slots: AnnouncementSlots;
}

export const { AnnouncementContext, useAnnouncement } = createContext<AnnouncementContextValue>()({
  name: "Announcement",
});
