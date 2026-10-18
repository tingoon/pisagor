<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselNextTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
  import { useMessageResolver } from "../provider/context";
  import { useCarousel } from "./carousel.context";

  const t = useMessageResolver();

  let { class: className, ...rest }: CarouselNextTriggerProps = $props();
  const styles = useCarousel();
  const slots = $derived(styles.slots);
</script>

<CarouselPrimitive.NextTrigger
  aria-label={t("carousel.next")}
  {...rest}
  class={cn(
    buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
    slots.nextTrigger({ class: cn(className) }),
  )}
  type="button"
>
  <CaretRightIcon aria-hidden="true" />
</CarouselPrimitive.NextTrigger>
