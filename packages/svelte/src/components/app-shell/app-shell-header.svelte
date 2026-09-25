<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { regionPositionClasses } from "./region";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  /**
   * Scroll behavior for the page header row inside `AppShell.Main`.
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
};

let { position = "fixed", class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<header
  {...rest}
  class={cn(ctx.slots.header(), regionPositionClasses(ctx.slots, position, "row", "header"), className)}
  data-part="header"
  data-position={position}
  data-scope="app-shell"
>
  {@render children?.()}
</header>
