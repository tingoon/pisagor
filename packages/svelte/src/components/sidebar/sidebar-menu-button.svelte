<script lang="ts">
import type { ComponentProps } from "svelte";
import Button from "../button/button.svelte";
import Tooltip from "../tooltip/tooltip.svelte";
import { useSidebar } from "./sidebar.context";

type TooltipConfig = Omit<ComponentProps<typeof Tooltip>, "children">;

type Props = ComponentProps<typeof Button> & {
  /**
   * Whether the button is active.
   * @defaultValue false
   */
  isActive?: boolean;
  /**
   * The tooltip to display when hovering over the button.
   */
  tooltip?: string | TooltipConfig;
};

let {
  size = "md",
  variant = "ghost",
  isActive = false,
  tooltip,
  class: className,
  children,
  clickEffect = false,
  ...rest
}: Props = $props();

const ctx = useSidebar();

const tooltipProps = $derived.by((): TooltipConfig | undefined => {
  if (!tooltip) return undefined;
  if (typeof tooltip === "string") return { content: tooltip };
  return tooltip;
});

const showTooltip = $derived(Boolean(tooltipProps) && ctx.state === "collapsed" && !ctx.isMobile);
</script>

{#if showTooltip && tooltipProps}
  <Tooltip {...tooltipProps} positioning={{ placement: "right", ...tooltipProps.positioning }}>
    <Button
      {...rest}
      class={ctx.slots.menuButton({ class: className })}
      {clickEffect}
      data-active={isActive}
      data-part="menu-button"
      data-scope="sidebar"
      data-sidebar="menu-button"
      data-size={size}
      {size}
      {variant}
    >
      {@render children?.()}
    </Button>
  </Tooltip>
{:else}
  <Button
    {...rest}
    class={ctx.slots.menuButton({ class: className })}
    {clickEffect}
    data-active={isActive}
    data-part="menu-button"
    data-scope="sidebar"
    data-sidebar="menu-button"
    data-size={size}
    {size}
    {variant}
  >
    {@render children?.()}
  </Button>
{/if}
