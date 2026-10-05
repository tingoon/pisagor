<script lang="ts">
import {
  type CarouselIndicatorProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

let { class: className, ...rest }: CarouselIndicatorProps = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
/>
