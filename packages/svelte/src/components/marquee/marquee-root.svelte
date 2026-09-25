<script lang="ts">
import type { MarqueeRootProps as ArkRootProps } from "@ark-ui/svelte/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/svelte/marquee";
import { marqueeRecipe } from "@pisagor/recipes/marquee";
import { cn } from "@pisagor/utils";
import { setMarqueeContext } from "./marquee.context";
import MarqueeEdge from "./marquee-edge.svelte";

type Props = Omit<ArkRootProps, "class" | "side"> & {
  class?: string | undefined;
  orientation?: "horizontal" | "vertical";
  recipe?: typeof marqueeRecipe;
  showEdges?: boolean;
};

let {
  orientation = "horizontal",
  showEdges = true,
  children,
  spacing = "16px",
  speed = 50,
  recipe = marqueeRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
const side = $derived(orientation === "horizontal" ? "start" : "bottom");
setMarqueeContext({
  get slots() {
    return slots;
  },
});
</script>

<MarqueePrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-orientation={orientation}
  {side}
  {spacing}
  {speed}
>
  {@render children?.()}
  {#if showEdges}
    <MarqueeEdge side={orientation === "horizontal" ? "start" : "top"} />
    <MarqueeEdge side={orientation === "horizontal" ? "end" : "bottom"} />
  {/if}
</MarqueePrimitive.Root>
