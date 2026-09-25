<script lang="ts">
import type { ComponentProps } from "svelte";
import Button from "../button/button.svelte";
import Tooltip from "../tooltip/tooltip.svelte";
import type { AppShellPlacement } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { useAppShellRail } from "./rail.context";

type TooltipConfig = Omit<ComponentProps<typeof Tooltip>, "children">;

type Props = ComponentProps<typeof Button> & {
  /** When `railId` is set, marks this item active when it matches the rail's active id. */
  isActive?: boolean;
  /**
   * Opens the panel on the same side as the parent rail when clicked.
   * @defaultValue false
   */
  opensPanel?: boolean;
  /**
   * Which panel side to open when `opensPanel` is true.
   * @defaultValue parent `AppShell.Rail` `placement`
   */
  panelPlacement?: AppShellPlacement;
  railId?: string;
  tooltip?: string | TooltipConfig;
};

let {
  panelPlacement: panelPlacementProp,
  size = "icon-md",
  variant = "ghost",
  isActive,
  opensPanel = false,
  railId,
  tooltip,
  onclick,
  class: className,
  children,
  clickEffect = false,
  ...rest
}: Props = $props();

const rail = useAppShellRail();
const ctx = useAppShell();
const panelPlacement = $derived(panelPlacementProp ?? rail.placement);
const active = $derived(isActive ?? (railId !== undefined && rail.activeRailId === railId));

const tooltipProps = $derived.by((): TooltipConfig | undefined => {
  if (!tooltip) return undefined;
  if (typeof tooltip === "string") return { content: tooltip };
  return tooltip;
});

function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  onclick?.(event);
  if (railId) {
    rail.setActiveRailId(railId);
  }
  if (opensPanel) {
    ctx.panelStates[panelPlacement]?.setOpen(true);
  }
}
</script>

{#if tooltipProps}
  <Tooltip
    {...tooltipProps}
    positioning={{
  placement: rail.placement === "end" ? "left" : "right",
  ...tooltipProps.positioning,
}}
  >
    <Button
      {...rest}
      aria-current={active ? "page" : undefined}
      class={ctx.slots.railItem({ class: className })}
      {clickEffect}
      data-active={active}
      data-part="rail-item"
      data-rail-id={railId}
      data-scope="app-shell"
      onclick={handleClick}
      {size}
      {variant}
    >
      {@render children?.()}
    </Button>
  </Tooltip>
{:else}
  <Button
    {...rest}
    aria-current={active ? "page" : undefined}
    class={ctx.slots.railItem({ class: className })}
    {clickEffect}
    data-active={active}
    data-part="rail-item"
    data-rail-id={railId}
    data-scope="app-shell"
    onclick={handleClick}
    {size}
    {variant}
  >
    {@render children?.()}
  </Button>
{/if}
