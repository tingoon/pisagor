import type { AnnouncementRecipe } from "@pisagor/recipes/announcement";
import { createContext } from "../../internal/utils";

interface AnnouncementContextValue {
  slots: AnnouncementRecipe;
}

export const { AnnouncementContext, useAnnouncement } = createContext<AnnouncementContextValue>()({
  name: "Announcement",
});
