import type { AppShellRecipe } from "@pisagor/recipes/app-shell";
import { createEffect, createMemo, createSignal, onCleanup } from "solid-js";
import type {
  AppShellFixedStackVar,
  AppShellPlacement,
  AppShellRailState,
  AppShellRegionPosition,
  AppShellRegionVar,
  AppShellResizableProps,
  AppShellSideState,
  MutableRef,
} from "./app-shell.context";
import { useAppShell, useSideState } from "./app-shell.context";

export function useRegionWidth(name: AppShellRegionVar, width: () => string) {
  const { setRegionVar } = useAppShell();

  createEffect(() => {
    const value = width();
    setRegionVar(name, value);
    onCleanup(() => setRegionVar(name, "0px"));
  });
}

export function regionVarFor(placement: AppShellPlacement, region: "inspector" | "panel" | "rail") {
  return `--app-shell-${placement}-${region}-width` as AppShellRegionVar;
}

export function gridAreaFor(placement: AppShellPlacement, region: "inspector" | "panel" | "rail") {
  return `${placement}-${region}` as const;
}

export function mergeResizableProps(
  defaults: Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">>,
  override?: AppShellResizableProps,
): Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">> {
  return {
    enabled: override?.enabled ?? defaults.enabled,
    handlePosition: override?.handlePosition ?? defaults.handlePosition,
  };
}

export function useShellRegionResizeCallbacks(regionVar: AppShellRegionVar) {
  const { setRegionResizing, setRegionVar } = useAppShell();

  return {
    onResizeChange: (nextWidth: number) => {
      setRegionVar(regionVar, `${nextWidth}px`);
    },
    onResizeEnd: () => setRegionResizing(false),
    onResizeStart: () => setRegionResizing(true),
  };
}

export function regionPositionClasses(
  slots: AppShellRecipe,
  position: AppShellRegionPosition = "fixed",
  orientation: "column" | "row" = "column",
  rowLayer?: "banner" | "header" | "navigation",
  columnLayer?: "inspector",
) {
  if (position === "relative") {
    return orientation === "column" ? slots.regionRelativeColumn() : slots.regionRelativeRow();
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
  getEl: () => HTMLElement | undefined | null,
  position: () => AppShellRegionPosition,
  cssVar: AppShellFixedStackVar,
) {
  const { setFixedStackVar } = useAppShell();

  createEffect(() => {
    const element = getEl();
    const pos = position();

    if (pos !== "fixed" || !element) {
      setFixedStackVar(cssVar, "0px");
      return;
    }

    const syncHeight = () => {
      setFixedStackVar(cssVar, `${element.offsetHeight}px`);
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(element);

    onCleanup(() => {
      observer.disconnect();
      setFixedStackVar(cssVar, "0px");
    });
  });
}

export function useAppShellSideOpen(
  placement: AppShellPlacement,
  statesRef: MutableRef<Partial<Record<AppShellPlacement, AppShellSideState>>>,
) {
  const { regionRevision } = useAppShell();
  return () => {
    regionRevision();
    return statesRef.current[placement]?.open() ?? false;
  };
}

export function useRegisteredSideState({
  placement,
  defaultOpen,
  getControlledOpen,
  statesRef,
  onOpenChange,
}: {
  getControlledOpen?: () => boolean | undefined;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement: AppShellPlacement;
  statesRef: MutableRef<Partial<Record<AppShellPlacement, AppShellSideState>>>;
}) {
  const { notifyRegionChange } = useAppShell();
  const side = useSideState({ defaultOpen, getControlledOpen, onOpenChange });

  const setOpen = (value: boolean | ((current: boolean) => boolean)) => {
    side.setOpen(value);
    notifyRegionChange();
  };

  const toggle = () => {
    side.toggle();
    notifyRegionChange();
  };

  const registeredSide: AppShellSideState = {
    open: side.open,
    setOpen,
    toggle,
  };

  statesRef.current[placement] = registeredSide;

  createEffect(() => {
    notifyRegionChange();
    onCleanup(() => {
      delete statesRef.current[placement];
    });
  });

  return registeredSide;
}

export function useRegisteredRailState({
  placement,
  defaultActiveRailId,
  getActiveRailId,
  statesRef,
  onActiveRailIdChange,
}: {
  getActiveRailId?: () => string | undefined;
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
  placement: AppShellPlacement;
  statesRef: MutableRef<Partial<Record<AppShellPlacement, AppShellRailState>>>;
}) {
  const [uncontrolled, setUncontrolled] = createSignal(defaultActiveRailId);
  const activeRailId = createMemo(() => {
    const controlled = getActiveRailId?.();
    return controlled !== undefined ? controlled : uncontrolled();
  });

  const setActiveRailId = (id: string) => {
    if (getActiveRailId?.() === undefined) setUncontrolled(id);
    onActiveRailIdChange?.(id);
  };

  const railState: AppShellRailState = {
    activeRailId,
    placement,
    setActiveRailId,
  };

  statesRef.current[placement] = railState;

  createEffect(() => {
    onCleanup(() => {
      delete statesRef.current[placement];
    });
  });

  return railState;
}
