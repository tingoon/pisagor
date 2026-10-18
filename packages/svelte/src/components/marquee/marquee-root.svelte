<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { MarqueeRootContract } from "@pisagor/props";
  import { withProvider } from "./marquee.context";
  import MarqueeEdge from "./marquee-edge.svelte";

  type Props = Omit<ArkRootProps, "side"> & {
    orientation?: "horizontal" | "vertical";
    showEdges?: boolean;
  } & Omit<MarqueeRootContract, "items">;

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
