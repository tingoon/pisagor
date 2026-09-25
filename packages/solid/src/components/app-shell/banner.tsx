import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_BANNER_HEIGHT_VAR } from "./constants";
import { regionPositionClasses, useSyncFixedRegionHeight } from "./region";

export interface AppShellBannerProps extends ComponentProps<"div"> {
  position?: AppShellRegionPosition;
}

export function AppShellBanner(props: AppShellBannerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["position", "class", "style"]);
  let bannerEl: HTMLDivElement | undefined;
  const { slots } = useAppShell();
  const position = () => local.position ?? "fixed";
  useSyncFixedRegionHeight(
    () => bannerEl,
    position,
    APP_SHELL_BANNER_HEIGHT_VAR,
  );

  return (
    <div
      {...rest}
      class={cn(
        slots.banner(),
        regionPositionClasses(slots, position(), "row", "banner"),
        local.class,
      )}
      data-part="banner"
      data-position={position()}
      data-scope="app-shell"
      ref={(el) => {
        bannerEl = el;
      }}
      style={{
        "grid-area": "banner",
        ...(typeof local.style === "object" &&
        local.style &&
        !Array.isArray(local.style)
          ? (local.style as Record<string, string>)
          : {}),
      }}
    />
  );
}
