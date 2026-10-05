<script lang="ts">
import {
  type CarouselRootProps as ArkRootProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import type { CarouselProps as BaseCarouselProps } from "@pisagor/props";
import { carouselRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setCarouselContext } from "./carousel.context";

type Props = ArkRootProps & BaseCarouselProps;

let {
  children,
  spacing = "16px",
  recipe = carouselRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setCarouselContext({
  get slots() {
    return slots;
  },
});
</script>

<CarouselPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  {spacing}
>
  {@render children?.()}
</CarouselPrimitive.Root>
