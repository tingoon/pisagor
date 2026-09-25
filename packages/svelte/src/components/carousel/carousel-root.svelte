<script lang="ts">
import type { CarouselRootProps as ArkRootProps } from "@ark-ui/svelte/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/svelte/carousel";
import { carouselRecipe } from "@pisagor/recipes/carousel";
import { cn } from "@pisagor/utils";
import { setCarouselContext } from "./carousel.context";

type Props = Omit<ArkRootProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof carouselRecipe;
};

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

<CarouselPrimitive.Root {...rest} class={slots.base({ class: cn(className) })} {spacing}>
  {@render children?.()}
</CarouselPrimitive.Root>
