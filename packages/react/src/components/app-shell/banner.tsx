import type { ComponentProps } from "react";
import { useRef } from "react";
import { cn } from "../../internal/utils";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_BANNER_HEIGHT_VAR } from "./constants";
import { regionPositionClasses, useSyncFixedRegionHeight } from "./region";

export interface AppShellBannerProps extends ComponentProps<"div"> {
  /**
   * Scroll behavior for the banner row.
   *
   * - `fixed` — stays in the viewport while the page scrolls.
   * - `relative` — scrolls with the page in normal document flow.
   *
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
}

export function AppShellBanner({
  position = "fixed",
  className,
  style,
  ...rest
}: AppShellBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { slots } = useAppShell();
  useSyncFixedRegionHeight(bannerRef, position, APP_SHELL_BANNER_HEIGHT_VAR);

  return (
    <div
      {...rest}
      className={cn(
        slots.banner(),
        regionPositionClasses(slots, position, "row", "banner"),
        className,
      )}
      data-part="banner"
      data-position={position}
      data-scope="app-shell"
      ref={bannerRef}
      style={{ gridArea: "banner", ...style }}
    />
  );
}

// #region Display Names
AppShellBanner.displayName = "AppShell.Banner";
// #endregion
