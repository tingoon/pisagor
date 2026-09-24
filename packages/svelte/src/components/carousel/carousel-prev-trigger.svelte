<script lang="ts">
import type { CarouselPrevTriggerProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselPrevTriggerProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.PrevTrigger
  {...rest}
  aria-label="Previous"
  class={cn(
  buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
  slots.prevTrigger({ class: cn(className) }),
)}
  type="button"
>
  <CaretLeftIcon aria-hidden="true" />
</CarouselPrimitive.PrevTrigger>
