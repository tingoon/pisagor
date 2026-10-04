import type { SidebarRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface SidebarContextProps {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  /** Slot class recipes from `sidebarRecipe`. */
  slots: SidebarRecipe;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

const ctx = createContext("Sidebar")<SidebarContextProps>();
export const setSidebarContext = ctx.setContext;
export const useSidebar = ctx.getContext;
