import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { regionPositionClasses } from "./region";

export interface AppShellHeaderProps extends ComponentProps<"header"> {
  /**
   * Scroll behavior for the page header row inside `AppShell.Main`.
   *
   * - `fixed` — stays in the viewport while the page scrolls.
   * - `relative` — scrolls with the page in normal document flow.
   *
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
}

export interface AppShellMainProps extends ComponentProps<"div"> {}

export interface AppShellContentProps extends ComponentProps<"main"> {}

export function AppShellMain({ className, style, ...rest }: AppShellMainProps) {
  const { slots } = useAppShell();

  return (
    <div
      {...rest}
      className={slots.main({ className })}
      data-part="main"
      data-scope="app-shell"
      style={{ gridArea: "main", ...style }}
    />
  );
}

export function AppShellHeader({ className, position = "fixed", ...rest }: AppShellHeaderProps) {
  const { slots } = useAppShell();

  return (
    <header
      {...rest}
      className={cn(
        slots.header(),
        regionPositionClasses(slots, position, "row", "header"),
        className,
      )}
      data-part="header"
      data-position={position}
      data-scope="app-shell"
    />
  );
}

export function AppShellContent({ className, ...rest }: AppShellContentProps) {
  const { slots } = useAppShell();

  return (
    <main
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="app-shell"
    />
  );
}

// #region Display Names
AppShellMain.displayName = "AppShell.Main";
AppShellHeader.displayName = "AppShell.Header";
AppShellContent.displayName = "AppShell.Content";
// #endregion
