<script lang="ts">
import type { CarouselIndicatorGroupProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselIndicatorGroupProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.IndicatorGroup {...rest} class={slots.indicatorGroup({ class: cn(className) })}>
  {@render children?.()}
</CarouselPrimitive.IndicatorGroup>
