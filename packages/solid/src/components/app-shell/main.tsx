import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShellStyles } from "./app-shell.context";
import { regionPositionClasses } from "./region";

export interface AppShellHeaderProps extends ComponentProps<"header"> {
  position?: AppShellRegionPosition;
}

export type AppShellMainProps = ComponentProps<"div">;
export type AppShellContentProps = ComponentProps<"main">;

export function AppShellMain(props: AppShellMainProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "style"]);
  const styles = useAppShellStyles();

  return (
    <div
      {...rest}
      class={styles.slots.main({ class: local.class })}
      data-part="main"
      data-scope="app-shell"
      style={{
        "grid-area": "main",
        ...(typeof local.style === "object" &&
        local.style &&
        !Array.isArray(local.style)
          ? (local.style as Record<string, string>)
          : {}),
      }}
    />
  );
}

export function AppShellHeader(props: AppShellHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["position", "class"]);
  const styles = useAppShellStyles();
  const position = () => local.position ?? "fixed";

  return (
    <header
      {...rest}
      class={cn(
        styles.slots.header(),
        regionPositionClasses(styles.slots, position(), "row", "header"),
        local.class,
      )}
      data-part="header"
      data-position={position()}
      data-scope="app-shell"
    />
  );
}

export function AppShellContent(props: AppShellContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useAppShellStyles();
  return (
    <main
      {...rest}
      class={styles.slots.content({ class: local.class })}
      data-part="content"
      data-scope="app-shell"
    />
  );
}
