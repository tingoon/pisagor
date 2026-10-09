import { type AppShellRecipe, appShellRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export type AppShellPlacement = "start" | "end";
export type AppShellRegionPosition = "fixed" | "relative";
export type AppShellResizeHandlePosition = "bottom" | "center" | "top";

export interface AppShellResizableProps {
  /**
   * Whether the region shows a resize handle when open.
   * @defaultValue true
   */
  enabled?: boolean;
  /**
   * Vertical placement of the visible resize-handle grip.
   * @defaultValue `"top"` via `useAppShell()`, `"center"` on the handle component
   */
  handlePosition?: AppShellResizeHandlePosition;
}

export const APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS = {
  enabled: true,
  handlePosition: "top",
} as const satisfies Required<
  Pick<AppShellResizableProps, "enabled" | "handlePosition">
>;

export const APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS = {
  enabled: true,
  handlePosition: "top",
} as const satisfies Required<
  Pick<AppShellResizableProps, "enabled" | "handlePosition">
>;

export type AppShellFixedStackVar =
  | "--app-shell-banner-height"
  | "--app-shell-navigation-height";

export type AppShellRegionVar =
  | "--app-shell-end-inspector-width"
  | "--app-shell-end-panel-width"
  | "--app-shell-end-rail-width"
  | "--app-shell-start-inspector-width"
  | "--app-shell-start-panel-width"
  | "--app-shell-start-rail-width";

export interface AppShellSideState {
  open: boolean;
  setOpen: (open: boolean | ((current: boolean) => boolean)) => void;
  toggle: () => void;
}

export interface AppShellRailState {
  activeRailId?: string;
  placement: AppShellPlacement;
  setActiveRailId: (id: string) => void;
}

export const ZERO_FIXED_STACK_VARS: Record<AppShellFixedStackVar, string> = {
  "--app-shell-banner-height": "0px",
  "--app-shell-navigation-height": "0px",
};

export const ZERO_REGION_VARS: Record<AppShellRegionVar, string> = {
  "--app-shell-end-inspector-width": "0px",
  "--app-shell-end-panel-width": "0px",
  "--app-shell-end-rail-width": "0px",
  "--app-shell-start-inspector-width": "0px",
  "--app-shell-start-panel-width": "0px",
  "--app-shell-start-rail-width": "0px",
};

export interface AppShellStateValue {
  defaultInspectorResizableProps: typeof APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS;
  defaultPanelResizableProps: typeof APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS;
  fixedStackVars: Record<AppShellFixedStackVar, string>;
  hasBanner: boolean;
  hasNavigation: boolean;
  inspectorStates: Partial<Record<AppShellPlacement, AppShellSideState>>;
  notifyRegionChange: () => void;
  panelStates: Partial<Record<AppShellPlacement, AppShellSideState>>;
  railStates: Partial<Record<AppShellPlacement, AppShellRailState>>;
  regionResizing: boolean;
  regionRevision: number;
  regionVars: Record<AppShellRegionVar, string>;
  registerBanner: () => () => void;
  registerNavigation: () => () => void;
  setFixedStackVar: (name: AppShellFixedStackVar, value: string) => void;
  setRegionResizing: (resizing: boolean) => void;
  setRegionVar: (name: AppShellRegionVar, value: string) => void;
  shellElement: HTMLDivElement | null;
}

export type AppShellContextValue = AppShellStateValue & {
  /** Slot class recipes from `appShellRecipe`. */
  slots: AppShellRecipe;
};

export const { Context: AppShellStylesContext, useStyles: useAppShellStyles } =
  createSlotRecipeContext({
    name: "AppShell",
    recipe: appShellRecipe,
  });

const stateCtx = createContext("AppShell")<AppShellStateValue>();
export const setAppShellStateContext = stateCtx.setContext;
export const useAppShellState = stateCtx.getContext;

/** Nearest app-shell styles + layout state (getter object — read lazily). */
export function useAppShell(): AppShellContextValue {
  const styles = useAppShellStyles();
  const state = useAppShellState();
  return {
    get defaultInspectorResizableProps() {
      return state.defaultInspectorResizableProps;
    },
    get defaultPanelResizableProps() {
      return state.defaultPanelResizableProps;
    },
    get fixedStackVars() {
      return state.fixedStackVars;
    },
    get hasBanner() {
      return state.hasBanner;
    },
    get hasNavigation() {
      return state.hasNavigation;
    },
    get inspectorStates() {
      return state.inspectorStates;
    },
    get notifyRegionChange() {
      return state.notifyRegionChange;
    },
    get panelStates() {
      return state.panelStates;
    },
    get railStates() {
      return state.railStates;
    },
    get regionResizing() {
      return state.regionResizing;
    },
    get regionRevision() {
      return state.regionRevision;
    },
    get regionVars() {
      return state.regionVars;
    },
    get registerBanner() {
      return state.registerBanner;
    },
    get registerNavigation() {
      return state.registerNavigation;
    },
    get setFixedStackVar() {
      return state.setFixedStackVar;
    },
    get setRegionResizing() {
      return state.setRegionResizing;
    },
    get setRegionVar() {
      return state.setRegionVar;
    },
    get shellElement() {
      return state.shellElement;
    },
    get slots() {
      return styles.slots;
    },
  };
}

/** Provides styles + layout state from one getter object (root). */
export function setAppShellContext(value: AppShellContextValue) {
  AppShellStylesContext.set({
    get slots() {
      return value.slots;
    },
  });
  setAppShellStateContext({
    get defaultInspectorResizableProps() {
      return value.defaultInspectorResizableProps;
    },
    get defaultPanelResizableProps() {
      return value.defaultPanelResizableProps;
    },
    get fixedStackVars() {
      return value.fixedStackVars;
    },
    get hasBanner() {
      return value.hasBanner;
    },
    get hasNavigation() {
      return value.hasNavigation;
    },
    get inspectorStates() {
      return value.inspectorStates;
    },
    get notifyRegionChange() {
      return value.notifyRegionChange;
    },
    get panelStates() {
      return value.panelStates;
    },
    get railStates() {
      return value.railStates;
    },
    get regionResizing() {
      return value.regionResizing;
    },
    get regionRevision() {
      return value.regionRevision;
    },
    get regionVars() {
      return value.regionVars;
    },
    get registerBanner() {
      return value.registerBanner;
    },
    get registerNavigation() {
      return value.registerNavigation;
    },
    get setFixedStackVar() {
      return value.setFixedStackVar;
    },
    get setRegionResizing() {
      return value.setRegionResizing;
    },
    get setRegionVar() {
      return value.setRegionVar;
    },
    get shellElement() {
      return value.shellElement;
    },
  });
}
