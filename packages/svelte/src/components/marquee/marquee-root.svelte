<script lang="ts">
import {
  type MarqueeRootProps as ArkRootProps,
  Marquee as MarqueePrimitive,
} from "@ark-ui/svelte/marquee";
import type { MarqueeProps as BaseMarqueeProps } from "@pisagor/props";
import { withProvider } from "./marquee.context";
import MarqueeEdge from "./marquee-edge.svelte";

type Props = Omit<ArkRootProps, "side"> & {
  orientation?: "horizontal" | "vertical";
  showEdges?: boolean;
} & BaseMarqueeProps;

let {
  orientation = "horizontal",
  showEdges = true,
  children,
  spacing = "16px",
  speed = 50,
  ...rest
}: Props = $props();
const side = $derived<"start" | "bottom">(
  orientation === "horizontal" ? "start" : "bottom",
);
const root = withProvider(
  () => ({
    ...rest,
    "data-orientation": orientation,
    side,
    spacing,
    speed,
  }),
  { name: "Root", slot: "base" },
);
</script>

<MarqueePrimitive.Root {...root.props}>
  {@render children?.()}
  {#if showEdges}
    <MarqueeEdge side={orientation === "horizontal" ? "start" : "top"} />
    <MarqueeEdge side={orientation === "horizontal" ? "end" : "bottom"} />
  {/if}
</MarqueePrimitive.Root>
