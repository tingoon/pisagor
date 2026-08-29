import type { SidebarSlots } from "@pisagor/recipes/sidebar";
import { createContext } from "../../internal/utils";

interface SidebarContextProps {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  /** Slot class recipes from `sidebarRecipe`. */
  slots: SidebarSlots;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

/**
 * Returns the nearest sidebar context.
 *
 * @returns Sidebar open state, mobile state, and layout helpers.
 */
export const { SidebarContext, useSidebar } = createContext<SidebarContextProps>()({
  name: "Sidebar",
});

export type { SidebarContextProps };
