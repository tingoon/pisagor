<script lang="ts">
  import type {
    MarqueeRootContract,
    MarqueeContract,
  } from "@pisagor/contracts";
  import type { ComponentProps, Snippet } from "svelte";
  import MarqueeContent from "./marquee-content.svelte";
  import MarqueeItem from "./marquee-item.svelte";
  import MarqueeRoot from "./marquee-root.svelte";

  type Props = Omit<ComponentProps<typeof MarqueeRoot>, "children"> & {
    items?: Array<string | Snippet>;
  } & MarqueeRootContract &
    MarqueeContract;

  let { items, ...rest }: Props = $props();
</script>

<MarqueeRoot {...rest}>
  {#if items}
    <MarqueeContent>
      {#each items as item, i (i)}
        <MarqueeItem>
          {#if typeof item === "string"}
            {item}
          {:else}
            {@render item()}
          {/if}
        </MarqueeItem>
      {/each}
    </MarqueeContent>
  {/if}
</MarqueeRoot>
