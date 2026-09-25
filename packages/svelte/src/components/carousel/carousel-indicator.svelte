<script lang="ts">
import type { CarouselIndicatorProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselIndicatorProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.Indicator {...rest} class={slots.indicator({ class: cn(className) })} />
