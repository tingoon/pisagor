<script lang="ts">
import { cn } from "@pisagor/utils";
import { onDestroy } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { AppShellPlacement, AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_RAIL_WIDTH } from "./constants";
import { setAppShellRailContext } from "./rail.context";
import { gridAreaFor, regionPositionClasses, regionVarFor } from "./region";

type Props = Omit<HTMLAttributes<HTMLElement>, "class" | "style"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  /**
   * Grid column side for the rail.
   * @defaultValue "start"
   */
  placement?: AppShellPlacement;
  /**
   * Scroll behavior for the rail column.
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
  activeRailId?: string;
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
  style?: string | undefined;
};

let {
  placement = "start",
  position = "fixed",
  defaultActiveRailId,
  activeRailId = $bindable(defaultActiveRailId),
  children,
  onActiveRailIdChange,
  class: className,
  style,
  ...rest
}: Props = $props();

const ctx = useAppShell();
const regionVar = $derived(regionVarFor(placement, "rail"));

function setActiveRailId(id: string) {
  activeRailId = id;
  onActiveRailIdChange?.(id);
}

$effect(() => {
  ctx.railStates[placement] = {
    get activeRailId() {
      return activeRailId;
    },
    placement,
    setActiveRailId,
  };
});

onDestroy(() => {
  delete ctx.railStates[placement];
});

$effect(() => {
  ctx.setRegionVar(regionVar, APP_SHELL_RAIL_WIDTH);
  return () => {
    ctx.setRegionVar(regionVar, "0px");
  };
});

setAppShellRailContext({
  get activeRailId() {
    return activeRailId;
  },
  get placement() {
    return placement;
  },
  setActiveRailId,
});
</script>

<aside
  {...rest}
  class={cn(
  ctx.slots.rail(),
  placement === "start" ? "border-e" : "border-s",
  regionPositionClasses(ctx.slots, position, "column"),
  className,
)}
  data-part="rail"
  data-placement={placement}
  data-position={position}
  data-scope="app-shell"
  style={`grid-area: ${gridAreaFor(placement, "rail")}; ${style ?? ""}`}
>
  {@render children?.()}
</aside>
