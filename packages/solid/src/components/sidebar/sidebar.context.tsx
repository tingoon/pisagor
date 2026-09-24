import type { SidebarRecipe } from "@pisagor/recipes/sidebar";
import type { Accessor } from "solid-js";
import { createContext } from "../../utils";

export interface SidebarContextProps {
  isMobile: Accessor<boolean>;
  open: Accessor<boolean>;
  openMobile: Accessor<boolean>;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  slots: SidebarRecipe;
  state: Accessor<"expanded" | "collapsed">;
  toggleSidebar: () => void;
}

export const { SidebarContext, useSidebar } = createContext<SidebarContextProps>()({
  name: "Sidebar",
});
