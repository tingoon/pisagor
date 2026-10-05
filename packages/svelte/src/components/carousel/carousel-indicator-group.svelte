<script lang="ts">
import {
  type CarouselIndicatorGroupProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

let {
  class: className,
  children,
  ...rest
}: CarouselIndicatorGroupProps = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.IndicatorGroup
  {...rest}
  class={slots.indicatorGroup({ class: cn(className) })}
>
  {@render children?.()}
</CarouselPrimitive.IndicatorGroup>
