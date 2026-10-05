<script lang="ts">
import {
  type CarouselControlProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

let { class: className, children, ...rest }: CarouselControlProps = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</CarouselPrimitive.Control>
