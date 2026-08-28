import type { ComponentProps } from "react";
import { useRef } from "react";
import { cn } from "../../internal/utils";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_NAVIGATION_HEIGHT_VAR } from "./constants";
import { regionPositionClasses, useSyncFixedRegionHeight } from "./region";

export interface AppShellNavigationProps extends ComponentProps<"nav"> {
  /**
   * Scroll behavior for the navigation row.
   *
   * - `fixed` — stays in the viewport while the page scrolls.
   * - `relative` — scrolls with the page in normal document flow.
   *
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
}

export function AppShellNavigation({
  position = "fixed",
  className,
  style,
  ...rest
}: AppShellNavigationProps) {
  const navigationRef = useRef<HTMLElement>(null);
  const { slots } = useAppShell();
  useSyncFixedRegionHeight(navigationRef, position, APP_SHELL_NAVIGATION_HEIGHT_VAR);

  return (
    <nav
      {...rest}
      className={cn(
        slots.navigation(),
        regionPositionClasses(slots, position, "row", "navigation"),
        className,
      )}
      data-part="navigation"
      data-position={position}
      data-scope="app-shell"
      ref={navigationRef}
      style={{ gridArea: "navigation", ...style }}
    />
  );
}

// #region Display Names
AppShellNavigation.displayName = "AppShell.Navigation";
// #endregion
