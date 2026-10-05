<script lang="ts">
import {
  type CarouselItemGroupProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

let { class: className, children, ...rest }: CarouselItemGroupProps = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.ItemGroup
  {...rest}
  class={slots.itemGroup({ class: cn(className) })}
>
  {@render children?.()}
</CarouselPrimitive.ItemGroup>
