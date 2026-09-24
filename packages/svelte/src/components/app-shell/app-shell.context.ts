import type { AppShellRecipe } from "@pisagor/recipes/app-shell";
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
} as const satisfies Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">>;

export const APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS = {
  enabled: true,
  handlePosition: "top",
} as const satisfies Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">>;

export type AppShellFixedStackVar = "--app-shell-banner-height" | "--app-shell-navigation-height";

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

export interface AppShellContextValue {
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
  /** Slot class recipes from `appShellRecipe`. */
  slots: AppShellRecipe;
}

const ctx = createContext<AppShellContextValue>({ name: "AppShell" });
export const setAppShellContext = ctx.setContext;
export const useAppShell = ctx.getContext;
