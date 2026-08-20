import { createContext } from "../../utils";

interface SidebarContextProps {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

/**
 * Returns the nearest sidebar context.
 *
 * @returns Sidebar open state, mobile state, and layout helpers.
 */
const [SidebarContext, useSidebar] = createContext<SidebarContextProps>({
  name: "Sidebar",
});

export type { SidebarContextProps };
export { SidebarContext, useSidebar };
