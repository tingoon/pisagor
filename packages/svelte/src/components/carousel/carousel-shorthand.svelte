<script lang="ts">
import type { ComponentProps, Snippet } from "svelte";
import CarouselControl from "./carousel-control.svelte";
import CarouselIndicator from "./carousel-indicator.svelte";
import CarouselIndicatorGroup from "./carousel-indicator-group.svelte";
import CarouselItem from "./carousel-item.svelte";
import CarouselItemGroup from "./carousel-item-group.svelte";
import CarouselNextTrigger from "./carousel-next-trigger.svelte";
import CarouselPrevTrigger from "./carousel-prev-trigger.svelte";
import CarouselRoot from "./carousel-root.svelte";

type PresetItem = { content: Snippet | string; key?: string };

type Props = Omit<ComponentProps<typeof CarouselRoot>, "children" | "slideCount"> & {
  slides?: PresetItem[];
};

let { slides = [], ...rest }: Props = $props();
</script>

<CarouselRoot {...rest} slideCount={slides.length}>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    {#each slides as slide, index (slide.key ?? index)}
      <CarouselItem {index}>
        {#if typeof slide.content === "string"}
          {slide.content}
        {:else}
          {@render slide.content()}
        {/if}
      </CarouselItem>
    {/each}
  </CarouselItemGroup>
  <CarouselIndicatorGroup>
    {#each slides as slide, index (slide.key ?? index)}
      <CarouselIndicator {index} />
    {/each}
  </CarouselIndicatorGroup>
</CarouselRoot>
