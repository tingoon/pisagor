<script lang="ts">
import type { CarouselItemProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselItemProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.Item {...rest} class={slots.item({ class: cn(className) })}>
  {@render children?.()}
</CarouselPrimitive.Item>
