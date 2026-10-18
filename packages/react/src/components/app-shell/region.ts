import { useUncontrolled } from "@mantine/hooks";
import type { AppShellRecipe } from "@pisagor/recipes";

import { type RefObject, useCallback, useLayoutEffect, useMemo } from "react";
import type {
  AppShellFixedStackVar,
  AppShellPlacement,
  AppShellRegionPosition,
  AppShellRegionVar,
  AppShellResizableProps,
  AppShellSideState,
} from "./app-shell.context";
import {
  type AppShellRailState,
  useAppShell,
  useSideState,
} from "./app-shell.context";

export function useRegionWidth(name: AppShellRegionVar, width: string) {
  const { setRegionVar } = useAppShell();

  useLayoutEffect(() => {
    setRegionVar(name, width);

    return () => {
      setRegionVar(name, "0px");
    };
  }, [name, setRegionVar, width]);
}

export function regionVarFor(
  placement: AppShellPlacement,
  region: "inspector" | "panel" | "rail",
) {
  return `--app-shell-${placement}-${region}-width` as AppShellRegionVar;
}

export function gridAreaFor(
  placement: AppShellPlacement,
  region: "inspector" | "panel" | "rail",
) {
  return `${placement}-${region}` as const;
}

export function mergeResizableProps(
  defaults: Required<
    Pick<AppShellResizableProps, "enabled" | "handlePosition">
  >,
  override?: AppShellResizableProps,
): Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">> {
  return {
    enabled: override?.enabled ?? defaults.enabled,
    handlePosition: override?.handlePosition ?? defaults.handlePosition,
  };
}

export function useShellRegionResizeCallbacks(regionVar: AppShellRegionVar) {
  const { setRegionResizing, setRegionVar } = useAppShell();

  return useMemo(
    () => ({
      onResizeChange: (nextWidth: number) => {
        setRegionVar(regionVar, `${nextWidth}px`);
      },
      onResizeEnd: () => setRegionResizing(false),
      onResizeStart: () => setRegionResizing(true),
    }),
    [regionVar, setRegionResizing, setRegionVar],
  );
}

export function regionPositionClasses(
  slots: AppShellRecipe,
  position: AppShellRegionPosition = "fixed",
  orientation: "column" | "row" = "column",
  rowLayer?: "banner" | "header" | "navigation",
  columnLayer?: "inspector",
) {
  if (position === "relative") {
    return orientation === "column"
      ? slots.regionRelativeColumn()
      : slots.regionRelativeRow();
  }

  if (orientation === "column") {
    if (columnLayer === "inspector") {
      return slots.regionStickyInspector();
    }

    return slots.regionStickyColumn();
  }

  if (rowLayer === "banner") {
    return slots.regionStickyBanner();
  }

  if (rowLayer === "navigation") {
    return slots.regionStickyNavigation();
  }

  return slots.regionStickyHeader();
}

export function useSyncFixedRegionHeight(
  ref: RefObject<HTMLElement | null>,
  position: AppShellRegionPosition,
  cssVar: AppShellFixedStackVar,
) {
  const { setFixedStackVar } = useAppShell();

  useLayoutEffect(() => {
    const element = ref.current;

    if (position !== "fixed" || !element) {
      setFixedStackVar(cssVar, "0px");

      return;
    }

    const syncHeight = () => {
      setFixedStackVar(cssVar, `${element.offsetHeight}px`);
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(element);

    return () => {
      observer.disconnect();
      setFixedStackVar(cssVar, "0px");
    };
  }, [cssVar, position, ref, setFixedStackVar]);
}

export function useAppShellSideOpen(
  placement: AppShellPlacement,
  statesRef: RefObject<Partial<Record<AppShellPlacement, AppShellSideState>>>,
) {
  const { regionRevision } = useAppShell();
  void regionRevision;

  return statesRef.current[placement]?.open ?? false;
}

export function useRegisteredSideState({
  placement,
  defaultOpen,
  controlledOpen,
  statesRef,
  onOpenChange,
}: {
  controlledOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement: AppShellPlacement;
  statesRef: RefObject<Partial<Record<AppShellPlacement, AppShellSideState>>>;
}) {
  const { notifyRegionChange } = useAppShell();
  const {
    open,
    setOpen: setSideOpen,
    toggle: toggleSide,
  } = useSideState({ controlledOpen, defaultOpen, onOpenChange });

  const setOpen = useCallback(
    (value: boolean | ((current: boolean) => boolean)) => {
      setSideOpen(value);
      notifyRegionChange();
    },
    [notifyRegionChange, setSideOpen],
  );

  const toggle = useCallback(() => {
    toggleSide();
    notifyRegionChange();
  }, [notifyRegionChange, toggleSide]);

  const registeredSide = useMemo(
    () => ({
      open,
      setOpen,
      toggle,
    }),
    [setOpen, open, toggle],
  );

  useLayoutEffect(() => {
    statesRef.current[placement] = registeredSide;
    notifyRegionChange();
  }, [notifyRegionChange, placement, registeredSide, statesRef]);

  useLayoutEffect(() => {
    const states = statesRef.current;

    return () => {
      delete states[placement];
    };
  }, [placement, statesRef]);

  return registeredSide;
}

export function useRegisteredRailState({
  placement,
  defaultActiveRailId,
  activeRailId: activeRailIdProp,
  statesRef,
  onActiveRailIdChange,
}: {
  activeRailId?: string;
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
  placement: AppShellPlacement;
  statesRef: RefObject<Partial<Record<AppShellPlacement, AppShellRailState>>>;
}) {
  const [activeRailId, setActiveRailId] = useUncontrolled({
    defaultValue: defaultActiveRailId,
    onChange: onActiveRailIdChange,
    value: activeRailIdProp,
  });

  const railState = useMemo(
    () => ({ activeRailId, placement, setActiveRailId }),
    [activeRailId, placement, setActiveRailId],
  );

  useLayoutEffect(() => {
    statesRef.current[placement] = railState;
  }, [placement, railState, statesRef]);

  useLayoutEffect(() => {
    const states = statesRef.current;

    return () => {
      delete states[placement];
    };
  }, [placement, statesRef]);

  return railState;
}
