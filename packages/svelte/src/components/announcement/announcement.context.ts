import type { AnnouncementRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface AnnouncementContextValue {
  slots: AnnouncementRecipe;
}

const ctx = createContext("Announcement")<AnnouncementContextValue>();

export const setAnnouncementContext = ctx.setContext;
export const useAnnouncement = ctx.getContext;
