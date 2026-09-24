<script lang="ts">
import type {
  ScrollAreaRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/svelte/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/svelte/scroll-area";
import type { ScrollAreaRecipeSlot, ScrollAreaVariantProps } from "@pisagor/recipes/scroll-area";
import type { Snippet } from "svelte";
import ScrollAreaRoot from "./scroll-area-root.svelte";
import ScrollAreaScrollbar from "./scroll-area-scrollbar.svelte";
import ScrollAreaThumb from "./scroll-area-thumb.svelte";
import ScrollAreaViewport from "./scroll-area-viewport.svelte";

type Props = Omit<ScrollAreaRootProps, "class" | "children"> &
  ScrollAreaVariantProps & {
    children?: Snippet;
    class?: string | undefined;
    classNames?: Partial<Record<ScrollAreaRecipeSlot, string>>;
    scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "class" | "orientation">;
    thumbProps?: Omit<ScrollAreaThumbProps, "children" | "class">;
    viewportProps?: Omit<ScrollAreaViewportProps, "children" | "class">;
  };

let {
  scrollFade,
  children,
  class: className,
  classNames,
  scrollbarProps,
  thumbProps,
  viewportProps,
  ...rest
}: Props = $props();
</script>

<ScrollAreaRoot {...rest} class={className} {scrollFade}>
  <ScrollAreaViewport {...viewportProps} class={classNames?.viewport}>
    {@render children?.()}
  </ScrollAreaViewport>
  <ScrollAreaScrollbar {...scrollbarProps} class={classNames?.scrollbar} orientation="vertical">
    <ScrollAreaThumb {...thumbProps} class={classNames?.thumb} />
  </ScrollAreaScrollbar>
  <ScrollAreaScrollbar {...scrollbarProps} class={classNames?.scrollbar} orientation="horizontal">
    <ScrollAreaThumb {...thumbProps} class={classNames?.thumb} />
  </ScrollAreaScrollbar>
  <ScrollAreaPrimitive.Corner />
</ScrollAreaRoot>
