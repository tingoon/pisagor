import { useUncontrolled } from "@mantine/hooks";
import type { AppShellVariants } from "@pisagor/styles/ui/app-shell";
import { type RefObject, useCallback } from "react";
import { createContext } from "../../utils";

export type AppShellPlacement = "start" | "end";

/** How a shell region behaves when the page scrolls. */
export type AppShellRegionPosition = "fixed" | "relative";

/** Vertical placement of the visible resize-handle grip. */
export type AppShellResizeHandlePosition = "bottom" | "center" | "top";

/** Resizable edge-handle options for a single panel or inspector region. */
export interface AppShellResizableProps {
  /**
   * Whether the region shows a resize handle when open.
   *
   * @defaultValue true
   */
  enabled?: boolean;
  /**
   * Vertical placement of the visible resize-handle grip.
   *
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

interface AppShellContextValue {
  inspectorStates: RefObject<Partial<Record<AppShellPlacement, AppShellSideState>>>;
  notifyRegionChange: () => void;
  panelStates: RefObject<Partial<Record<AppShellPlacement, AppShellSideState>>>;
  railStates: RefObject<Partial<Record<AppShellPlacement, AppShellRailState>>>;
  regionResizing: boolean;
  regionRevision: number;
  regionVars: Record<AppShellRegionVar, string>;
  fixedStackVars: Record<AppShellFixedStackVar, string>;
  defaultInspectorResizableProps: typeof APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS;
  defaultPanelResizableProps: typeof APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS;
  setRegionResizing: (resizing: boolean) => void;
  setFixedStackVar: (name: AppShellFixedStackVar, value: string) => void;
  setRegionVar: (name: AppShellRegionVar, value: string) => void;
  shellRef: RefObject<HTMLDivElement | null>;
  /** Slot class recipes from `appShellVariants`. */
  slots: AppShellVariants;
}

interface UseSideStateOptions {
  controlledOpen?: boolean;
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

export const { AppShellContext, useAppShell } = createContext<AppShellContextValue>()({
  name: "AppShell",
});

export function useSideState({
  controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: UseSideStateOptions): AppShellSideState {
  const [open, setOpenValue] = useUncontrolled({
    defaultValue: defaultOpen,
    finalValue: false,
    onChange: onOpenChange,
    value: controlledOpen,
  });

  const setOpen = useCallback(
    (value: boolean | ((current: boolean) => boolean)) => {
      setOpenValue(typeof value === "function" ? value(open) : value);
    },
    [open, setOpenValue],
  );

  const toggle = useCallback(() => {
    setOpenValue(!open);
  }, [open, setOpenValue]);

  return { open, setOpen, toggle };
}
