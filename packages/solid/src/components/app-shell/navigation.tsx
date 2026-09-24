import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_NAVIGATION_HEIGHT_VAR } from "./constants";
import { regionPositionClasses, useSyncFixedRegionHeight } from "./region";

export interface AppShellNavigationProps extends ComponentProps<"nav"> {
  position?: AppShellRegionPosition;
}

export function AppShellNavigation(props: AppShellNavigationProps): JSX.Element {
  const [local, rest] = splitProps(props, ["position", "class", "style"]);
  let navigationEl: HTMLElement | undefined;
  const { slots } = useAppShell();
  const position = () => local.position ?? "fixed";
  useSyncFixedRegionHeight(() => navigationEl, position, APP_SHELL_NAVIGATION_HEIGHT_VAR);

  return (
    <nav
      {...rest}
      class={cn(
        slots.navigation(),
        regionPositionClasses(slots, position(), "row", "navigation"),
        local.class,
      )}
      data-part="navigation"
      data-position={position()}
      data-scope="app-shell"
      ref={(el) => {
        navigationEl = el;
      }}
      style={{
        "grid-area": "navigation",
        ...(typeof local.style === "object" && local.style && !Array.isArray(local.style)
          ? (local.style as Record<string, string>)
          : {}),
      }}
    />
  );
}
