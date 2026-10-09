<script lang="ts">
import {
  type CarouselIndicatorProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { cn } from "@pisagor/utils";
import { useCarousel } from "./carousel.context";

let { class: className, ...rest }: CarouselIndicatorProps = $props();
const styles = useCarousel();
const slots = $derived(styles.slots);
</script>

<CarouselPrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
/>
