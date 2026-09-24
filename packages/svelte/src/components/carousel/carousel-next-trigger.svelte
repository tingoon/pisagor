<script lang="ts">
import type { CarouselNextTriggerProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useCarousel } from "./carousel.context";

type Props = Omit<CarouselNextTriggerProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useCarousel();
</script>

<CarouselPrimitive.NextTrigger
  {...rest}
  aria-label="Next"
  class={cn(
  buttonRecipe({ pill: true, size: "icon-md", variant: "outline" }).base(),
  slots.nextTrigger({ class: cn(className) }),
)}
  type="button"
>
  <CaretRightIcon aria-hidden="true" />
</CarouselPrimitive.NextTrigger>
