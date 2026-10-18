<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselPrevTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretLeftIcon } from "phosphor-svelte";
  import { useMessageResolver } from "../provider/context";
  import { useCarousel } from "./carousel.context";

  const t = useMessageResolver();

  let { class: className, ...rest }: CarouselPrevTriggerProps = $props();
  const styles = useCarousel();
  const slots = $derived(styles.slots);
</script>

<CarouselPrimitive.PrevTrigger
  aria-label={t("carousel.previous")}
  {...rest}
  class={cn(
    buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
    slots.prevTrigger({ class: cn(className) }),
  )}
  type="button"
>
  <CaretLeftIcon aria-hidden="true" />
</CarouselPrimitive.PrevTrigger>
