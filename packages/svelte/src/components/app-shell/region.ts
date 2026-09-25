import type { AppShellRecipe } from "@pisagor/recipes/app-shell";
import type {
  AppShellPlacement,
  AppShellRegionPosition,
  AppShellRegionVar,
  AppShellResizableProps,
} from "./app-shell.context";

export function regionVarFor(
  placement: AppShellPlacement,
  region: "inspector" | "panel" | "rail",
): AppShellRegionVar {
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
