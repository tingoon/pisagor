<script lang="ts">
import type { CarouselControlProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselControlProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</CarouselPrimitive.Control>
