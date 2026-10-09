import type { SidebarRecipe } from "@pisagor/recipes";
import { sidebarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context: SidebarStylesContext,
  useStyles: useSidebarStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Sidebar",
  recipe: sidebarRecipe,
});

export interface SidebarStateValue {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

const stateCtx = createContext("SidebarState")<SidebarStateValue>();
export const setSidebarStateContext = stateCtx.setContext;
export const useSidebarState = stateCtx.getContext;

export type SidebarContextProps = SidebarStateValue & {
  slots: SidebarRecipe;
};

export function useSidebar() {
  const styles = useSidebarStyles();
  const state = useSidebarState();
  return {
    get isMobile() {
      return state.isMobile;
    },
    get open() {
      return state.open;
    },
    get openMobile() {
      return state.openMobile;
    },
    get setOpen() {
      return state.setOpen;
    },
    get setOpenMobile() {
      return state.setOpenMobile;
    },
    get slots() {
      return styles.slots;
    },
    get state() {
      return state.state;
    },
    get toggleSidebar() {
      return state.toggleSidebar;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setSidebarContext(value: SidebarContextProps) {
  SidebarStylesContext.set({
    get slots() {
      return value.slots;
    },
  });
  setSidebarStateContext({
    get isMobile() {
      return value.isMobile;
    },
    get open() {
      return value.open;
    },
    get openMobile() {
      return value.openMobile;
    },
    get setOpen() {
      return value.setOpen;
    },
    get setOpenMobile() {
      return value.setOpenMobile;
    },
    get state() {
      return value.state;
    },
    get toggleSidebar() {
      return value.toggleSidebar;
    },
  });
}
