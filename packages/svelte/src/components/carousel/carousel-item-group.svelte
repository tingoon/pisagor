<script lang="ts">
import type { CarouselItemGroupProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselItemGroupProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.ItemGroup {...rest} class={slots.itemGroup({ class: cn(className) })}>
  {@render children?.()}
</CarouselPrimitive.ItemGroup>
