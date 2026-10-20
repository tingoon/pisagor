<script lang="ts">
  import type {
    MarqueeContract,
    MarqueeRootContract,
  } from "@pisagor/contracts";
  import type { ComponentProps, Snippet } from "svelte";
  import MarqueeContent from "./marquee-content.svelte";
  import MarqueeEdge from "./marquee-edge.svelte";
  import MarqueeItem from "./marquee-item.svelte";
  import MarqueeRoot from "./marquee-root.svelte";
  import MarqueeViewport from "./marquee-viewport.svelte";

  type Props = Omit<ComponentProps<typeof MarqueeRoot>, "children"> & {
    items?: Array<string | Snippet>;
    /**
     * Whether to show the fading edges.
     *
     * @defaultValue true
     */
    showEdges?: boolean;
  } & MarqueeRootContract &
    MarqueeContract;

  let {
    classNames,
    items,
    orientation = "horizontal",
    showEdges = true,
    ...rest
  }: Props = $props();
  const horizontal = $derived(orientation === "horizontal");
</script>

<MarqueeRoot {...rest} {orientation}>
  <MarqueeViewport class={classNames?.viewport}>
    <MarqueeContent class={classNames?.content}>
      {#each items ?? [] as item, i (i)}
        <MarqueeItem class={classNames?.item}>
          {#if typeof item === "string"}
            {item}
          {:else}
            {@render item()}
          {/if}
        </MarqueeItem>
      {/each}
    </MarqueeContent>
  </MarqueeViewport>
  {#if showEdges}
    <MarqueeEdge class={classNames?.edge} side={horizontal ? "start" : "top"} />
    <MarqueeEdge
      class={classNames?.edge}
      side={horizontal ? "end" : "bottom"}
    />
  {/if}
</MarqueeRoot>
