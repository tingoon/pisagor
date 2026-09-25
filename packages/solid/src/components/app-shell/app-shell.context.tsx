import type { AppShellRecipe } from "@pisagor/recipes/app-shell";
import type { Accessor } from "solid-js";
import { createMemo, createSignal } from "solid-js";
import { createContext } from "../../utils";

export type AppShellPlacement = "start" | "end";
export type AppShellRegionPosition = "fixed" | "relative";
export type AppShellResizeHandlePosition = "bottom" | "center" | "top";

export interface AppShellResizableProps {
  enabled?: boolean;
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
  open: Accessor<boolean>;
  setOpen: (open: boolean | ((current: boolean) => boolean)) => void;
  toggle: () => void;
}

export interface AppShellRailState {
  activeRailId: Accessor<string | undefined>;
  placement: AppShellPlacement;
  setActiveRailId: (id: string) => void;
}

export type MutableRef<T> = { current: T };

interface AppShellContextValue {
  inspectorStates: MutableRef<
    Partial<Record<AppShellPlacement, AppShellSideState>>
  >;
  notifyRegionChange: () => void;
  panelStates: MutableRef<
    Partial<Record<AppShellPlacement, AppShellSideState>>
  >;
  railStates: MutableRef<Partial<Record<AppShellPlacement, AppShellRailState>>>;
  regionResizing: Accessor<boolean>;
  regionRevision: Accessor<number>;
  regionVars: Accessor<Record<AppShellRegionVar, string>>;
  fixedStackVars: Accessor<Record<AppShellFixedStackVar, string>>;
  defaultInspectorResizableProps: typeof APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS;
  defaultPanelResizableProps: typeof APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS;
  setRegionResizing: (resizing: boolean) => void;
  setFixedStackVar: (name: AppShellFixedStackVar, value: string) => void;
  setRegionVar: (name: AppShellRegionVar, value: string) => void;
  shellRef: MutableRef<HTMLDivElement | null>;
  slots: AppShellRecipe;
}

interface UseSideStateOptions {
  getControlledOpen?: () => boolean | undefined;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
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

export const { AppShellContext, useAppShell } =
  createContext<AppShellContextValue>()({
    name: "AppShell",
  });

export function useSideState({
  defaultOpen = false,
  getControlledOpen,
  onOpenChange,
}: UseSideStateOptions): AppShellSideState {
  const [uncontrolled, setUncontrolled] = createSignal(defaultOpen);
  const open = createMemo(() => {
    const controlled = getControlledOpen?.();
    return controlled !== undefined ? !!controlled : uncontrolled();
  });

  const setOpenValue = (next: boolean) => {
    if (getControlledOpen?.() === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };

  const setOpen = (value: boolean | ((current: boolean) => boolean)) => {
    setOpenValue(typeof value === "function" ? value(open()) : value);
  };

  const toggle = () => setOpenValue(!open());

  return { open, setOpen, toggle };
}
