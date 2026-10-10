<script lang="ts">
import {
  type CarouselPrevTriggerProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import { useCarousel } from "./carousel.context";

let { class: className, ...rest }: CarouselPrevTriggerProps = $props();
const styles = useCarousel();
const slots = $derived(styles.slots);
</script>

<CarouselPrimitive.PrevTrigger
  {...rest}
  aria-label="Previous"
  class={cn(
    buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
    slots.prevTrigger({ class: cn(className) }),
  )}
  type="button"
>
  <CaretLeftIcon aria-hidden="true" />
</CarouselPrimitive.PrevTrigger>
