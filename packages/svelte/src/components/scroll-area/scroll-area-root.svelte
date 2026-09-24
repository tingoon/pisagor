<script lang="ts">
import type { ScrollAreaRootProps } from "@ark-ui/svelte/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/svelte/scroll-area";
import { type ScrollAreaVariantProps, scrollAreaRecipe } from "@pisagor/recipes/scroll-area";
import { cn } from "@pisagor/utils";
import { setScrollAreaContext } from "./scroll-area.context";

type Props = Omit<ScrollAreaRootProps, "class"> &
  ScrollAreaVariantProps & {
    class?: string | undefined;
    recipe?: typeof scrollAreaRecipe;
  };

let {
  scrollFade = false,
  recipe = scrollAreaRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ scrollFade }));

setScrollAreaContext({
  get slots() {
    return slots;
  },
});
</script>

<ScrollAreaPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</ScrollAreaPrimitive.Root>
