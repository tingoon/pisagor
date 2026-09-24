import type { AnnouncementRecipe } from "@pisagor/recipes/announcement";
import { createContext } from "../../utils/create-context";

export interface AnnouncementContextValue {
  slots: AnnouncementRecipe;
}

const ctx = createContext<AnnouncementContextValue>({ name: "Announcement" });

export const setAnnouncementContext = ctx.setContext;
export const useAnnouncement = ctx.getContext;
