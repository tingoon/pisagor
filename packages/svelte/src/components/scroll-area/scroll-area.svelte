<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaRootProps,
    type ScrollAreaScrollbarProps,
    type ScrollAreaThumbProps,
    type ScrollAreaViewportProps,
  } from "@ark-ui/svelte";
  import type { ScrollAreaProps as BaseScrollAreaProps } from "@pisagor/props";
  import type { ScrollAreaRecipeSlot } from "@pisagor/recipes";
  import type { Snippet } from "svelte";
  import type { VariantClassNames } from "../../internal";
  import ScrollAreaRoot from "./scroll-area-root.svelte";
  import ScrollAreaScrollbar from "./scroll-area-scrollbar.svelte";
  import ScrollAreaThumb from "./scroll-area-thumb.svelte";
  import ScrollAreaViewport from "./scroll-area-viewport.svelte";

  type Props = Omit<ScrollAreaRootProps, "children"> & {
    children?: Snippet;
    classNames?: VariantClassNames<ScrollAreaRecipeSlot>;
    scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "orientation">;
    thumbProps?: Omit<ScrollAreaThumbProps, "children">;
    viewportProps?: Omit<ScrollAreaViewportProps, "children">;
  } & BaseScrollAreaProps;

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
  <ScrollAreaScrollbar
    {...scrollbarProps}
    class={classNames?.scrollbar}
    orientation="vertical"
  >
    <ScrollAreaThumb {...thumbProps} class={classNames?.thumb} />
  </ScrollAreaScrollbar>
  <ScrollAreaScrollbar
    {...scrollbarProps}
    class={classNames?.scrollbar}
    orientation="horizontal"
  >
    <ScrollAreaThumb {...thumbProps} class={classNames?.thumb} />
  </ScrollAreaScrollbar>
  <ScrollAreaPrimitive.Corner />
</ScrollAreaRoot>
