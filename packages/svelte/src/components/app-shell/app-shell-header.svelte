<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { type AppShellRegionPosition, useAppShell } from "./app-shell.context";
import { regionPositionClasses } from "./region";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
  /**
   * Scroll behavior for the page header row inside `AppShell.Main`.
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
};

let {
  position = "fixed",
  class: className,
  children,
  ...rest
}: Props = $props();
const ctx = useAppShell();
</script>

<header
  {...rest}
  class={cn(
    ctx.slots.header(),
    regionPositionClasses(ctx.slots, position, "row", "header"),
    className,
  )}
  data-part="header"
  data-position={position}
  data-scope="app-shell"
>
  {@render children?.()}
</header>
