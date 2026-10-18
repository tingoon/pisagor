<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselAutoplayTriggerProps,
    useCarouselContext,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { PauseIcon, PlayIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";

  const { m } = useLocale();
  const carousel = useCarouselContext();

  let { class: className, ...rest }: CarouselAutoplayTriggerProps = $props();
  const isPlaying = $derived(carousel().isPlaying);
</script>

<CarouselPrimitive.AutoplayTrigger
  aria-label={m(isPlaying ? "carousel.pause" : "carousel.play")}
  {...rest}
  class={cn(
    buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
    className,
  )}
  type="button"
>
  {#if isPlaying}
    <PauseIcon aria-hidden="true" />
  {:else}
    <PlayIcon aria-hidden="true" />
  {/if}
</CarouselPrimitive.AutoplayTrigger>
