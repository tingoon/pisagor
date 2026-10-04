import type { AnnouncementRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface AnnouncementContextValue {
  slots: AnnouncementRecipe;
}

export const { AnnouncementContext, useAnnouncement } =
  createContext("Announcement")<AnnouncementContextValue>();
