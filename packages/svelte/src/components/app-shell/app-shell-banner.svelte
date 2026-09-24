<script lang="ts">
import { cn } from "@pisagor/utils";
import { onDestroy, onMount } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_BANNER_HEIGHT_VAR } from "./constants";
import { regionPositionClasses } from "./region";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "style"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  /**
   * Scroll behavior for the banner row.
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
  style?: string | undefined;
};

let { position = "fixed", class: className, style, children, ...rest }: Props = $props();

const ctx = useAppShell();
let el = $state<HTMLDivElement | null>(null);
let unregister: (() => void) | undefined;

onMount(() => {
  unregister = ctx.registerBanner();
});
onDestroy(() => {
  unregister?.();
});

$effect(() => {
  const element = el;
  if (position !== "fixed" || !element) {
    ctx.setFixedStackVar(APP_SHELL_BANNER_HEIGHT_VAR, "0px");
    return;
  }
  const syncHeight = () => {
    ctx.setFixedStackVar(APP_SHELL_BANNER_HEIGHT_VAR, `${element.offsetHeight}px`);
  };
  syncHeight();
  const observer = new ResizeObserver(syncHeight);
  observer.observe(element);
  return () => {
    observer.disconnect();
    ctx.setFixedStackVar(APP_SHELL_BANNER_HEIGHT_VAR, "0px");
  };
});
</script>

<div
  {...rest}
  class={cn(ctx.slots.banner(), regionPositionClasses(ctx.slots, position, "row", "banner"), className)}
  data-part="banner"
  data-position={position}
  data-scope="app-shell"
  style={`grid-area: banner; ${style ?? ""}`}
  bind:this={el}
>
  {@render children?.()}
</div>
