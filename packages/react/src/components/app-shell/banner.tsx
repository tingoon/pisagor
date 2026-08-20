import { appShellBannerVariants } from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useRef } from "react";
import type { AppShellRegionPosition } from "./app-shell.context";
import { APP_SHELL_BANNER_HEIGHT_VAR } from "./constants";
import { regionPositionClasses, useSyncFixedRegionHeight } from "./region";

interface AppShellBannerProps extends ComponentProps<"div"> {
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
  className,
  position = "fixed",
  style,
  ...rest
}: AppShellBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  useSyncFixedRegionHeight(bannerRef, position, APP_SHELL_BANNER_HEIGHT_VAR);

  return (
    <div
      {...rest}
      className={cn(
        appShellBannerVariants(),
        regionPositionClasses(position, "row", "banner"),
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
AppShellBanner.displayName = "AppShell.Banner";
