<script lang="ts">
import {
  type CarouselNextTriggerProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useCarousel } from "./carousel.context";

let { class: className, ...rest }: CarouselNextTriggerProps = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.NextTrigger
  {...rest}
  aria-label="Next"
  class={cn(
    buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
    slots.nextTrigger({ class: cn(className) }),
  )}
  type="button"
>
  <CaretRightIcon aria-hidden="true" />
</CarouselPrimitive.NextTrigger>
