import {
  appShellContentVariants,
  appShellHeaderVariants,
  appShellMainVariants,
} from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { AppShellRegionPosition } from "./app-shell.context";
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

export function AppShellMain({ className, style, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={appShellMainVariants({ className })}
      data-part="main"
      data-scope="app-shell"
      style={{ gridArea: "main", ...style }}
    />
  );
}

export function AppShellHeader({ className, position = "fixed", ...rest }: AppShellHeaderProps) {
  return (
    <header
      {...rest}
      className={cn(
        appShellHeaderVariants(),
        regionPositionClasses(position, "row", "header"),
        className,
      )}
      data-part="header"
      data-position={position}
      data-scope="app-shell"
    />
  );
}

export function AppShellContent({ className, ...rest }: ComponentProps<"main">) {
  return (
    <main
      {...rest}
      className={appShellContentVariants({ className })}
      data-part="content"
      data-scope="app-shell"
    />
  );
}

AppShellMain.displayName = "AppShell.Main";
AppShellHeader.displayName = "AppShell.Header";
AppShellContent.displayName = "AppShell.Content";
