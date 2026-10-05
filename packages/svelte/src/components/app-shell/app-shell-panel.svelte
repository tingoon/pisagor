<script lang="ts">
import { cn } from "@pisagor/utils";
import { onDestroy, untrack } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { Resizable } from "../resizable";
import type {
  AppShellPlacement,
  AppShellRegionPosition,
  AppShellResizableProps,
} from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import {
  gridAreaFor,
  mergeResizableProps,
  regionPositionClasses,
  regionVarFor,
} from "./region";

type Props = Omit<HTMLAttributes<HTMLElement>, "style"> & {
  children?: import("svelte").Snippet;
  /**
   * Grid column side for the panel.
   * @defaultValue "start"
   */
  placement?: AppShellPlacement;
  /**
   * Scroll behavior for the panel column.
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
  /**
   * Initial open state when uncontrolled.
   * @defaultValue false
   */
  defaultOpen?: boolean;
  /**
   * Initial panel width in pixels.
   * @defaultValue 256
   */
  defaultWidth?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Resizable edge-handle options. Defaults come from `useAppShell()`. */
  resizableProps?: AppShellResizableProps;
  style?: string | undefined;
};

let {
  placement = "start",
  position = "fixed",
  defaultOpen = false,
  defaultWidth = 256,
  open = $bindable(defaultOpen),
  children,
  onOpenChange,
  class: className,
  style,
  resizableProps: resizablePropsProp,
  ...rest
}: Props = $props();

const ctx = useAppShell();
const resizableProps = $derived(
  mergeResizableProps(ctx.defaultPanelResizableProps, resizablePropsProp),
);
const regionVar = $derived(regionVarFor(placement, "panel"));
let widthPx = $state(untrack(() => defaultWidth));

function setOpen(value: boolean | ((current: boolean) => boolean)) {
  const next = typeof value === "function" ? value(open) : value;
  open = next;
  onOpenChange?.(next);
  ctx.notifyRegionChange();
}

function toggle() {
  setOpen(!open);
}

$effect(() => {
  ctx.panelStates[placement] = {
    get open() {
      return open;
    },
    setOpen,
    toggle,
  };
  ctx.notifyRegionChange();
});

onDestroy(() => {
  delete ctx.panelStates[placement];
});

const resolvedWidth = $derived(open ? `${widthPx}px` : "0px");

$effect(() => {
  ctx.setRegionVar(regionVar, resolvedWidth);
  return () => {
    ctx.setRegionVar(regionVar, "0px");
  };
});
</script>

<aside
  {...rest}
  class={cn(
    ctx.slots.panel(),
    placement === "start" ? "border-e border-border" : "border-s border-border",
    regionPositionClasses(ctx.slots, position, "column"),
    open ? "opacity-100" : "pointer-events-none opacity-0",
    className,
  )}
  data-part="panel"
  data-placement={placement}
  data-position={position}
  data-scope="app-shell"
  data-state={open ? "open" : "closed"}
  style={`grid-area: ${gridAreaFor(placement, "panel")}; ${style ?? ""}`}
>
  {#if open && resizableProps.enabled}
    <Resizable.EdgeHandle
      handlePosition={resizableProps.handlePosition}
      label={`Resize ${placement} panel`}
      onResizeChange={(nextWidth) =>
        ctx.setRegionVar(regionVar, `${nextWidth}px`)}
      onResizeEnd={() => ctx.setRegionResizing(false)}
      onResizeStart={() => ctx.setRegionResizing(true)}
      onWidthChange={(w) => (widthPx = w)}
      {placement}
      width={widthPx}
    />
  {/if}
  <div class={ctx.slots.sideBody()}>
    {@render children?.()}
  </div>
</aside>
