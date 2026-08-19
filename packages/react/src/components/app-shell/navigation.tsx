import { appShellNavigationVariants } from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useRef } from "react";
import { APP_SHELL_NAVIGATION_HEIGHT_VAR } from "./constants";
import type { AppShellRegionPosition } from "./context";
import { regionPositionClasses, useSyncFixedRegionHeight } from "./region";

interface AppShellNavigationProps extends ComponentProps<"nav"> {
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
  className,
  position = "fixed",
  style,
  ...rest
}: AppShellNavigationProps) {
  const navigationRef = useRef<HTMLElement>(null);
  useSyncFixedRegionHeight(navigationRef, position, APP_SHELL_NAVIGATION_HEIGHT_VAR);

  return (
    <nav
      {...rest}
      className={cn(
        appShellNavigationVariants(),
        regionPositionClasses(position, "row", "navigation"),
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
AppShellNavigation.displayName = "AppShell.Navigation";
