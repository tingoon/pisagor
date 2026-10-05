<script lang="ts">
import {
  type CarouselItemProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

let { class: className, children, ...rest }: CarouselItemProps = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.Item {...rest} class={slots.item({ class: cn(className) })}>
  {@render children?.()}
</CarouselPrimitive.Item>
