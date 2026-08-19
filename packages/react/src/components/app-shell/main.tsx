import {
  appShellContentVariants,
  appShellHeaderVariants,
  appShellMainVariants,
} from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { AppShellRegionPosition } from "./context";
import { regionPositionClasses } from "./region";

interface AppShellHeaderProps extends ComponentProps<"header"> {
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
      className={cn(appShellMainVariants(), className)}
      data-part="main"
      data-scope="app-shell"
      style={{ gridArea: "main", ...style }}
    />
  );
}
AppShellMain.displayName = "AppShell.Main";

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
AppShellHeader.displayName = "AppShell.Header";

export function AppShellContent({ className, ...rest }: ComponentProps<"main">) {
  return (
    <main
      {...rest}
      className={cn(appShellContentVariants(), className)}
      data-part="content"
      data-scope="app-shell"
    />
  );
}
AppShellContent.displayName = "AppShell.Content";
