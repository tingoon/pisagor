<script lang="ts">
import {
  ScrollArea as ScrollAreaPrimitive,
  type ScrollAreaRootProps,
} from "@ark-ui/svelte/scroll-area";
import type { ScrollAreaProps as BaseScrollAreaProps } from "@pisagor/props";
import { scrollAreaRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setScrollAreaContext } from "./scroll-area.context";

type Props = ScrollAreaRootProps & BaseScrollAreaProps;

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

<ScrollAreaPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
>
  {@render children?.()}
</ScrollAreaPrimitive.Root>
