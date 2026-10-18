<script lang="ts">
  import {
    Swap as SwapPrimitive,
    type SwapIndicatorProps,
    type SwapRootProps,
  } from "@ark-ui/svelte";
  import type { SwapProps as BaseSwapProps } from "@pisagor/props";
  import { swapRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";

  type Props = Omit<SwapRootProps, "children"> & {
    children?: Snippet;
    off?: Snippet;
    on?: Snippet;
    offIndicatorProps?: Omit<SwapIndicatorProps, "children" | "type">;
    onIndicatorProps?: Omit<SwapIndicatorProps, "children" | "type">;
  } & BaseSwapProps;

  let {
    variant = "fade",
    children,
    off,
    on,
    offIndicatorProps,
    onIndicatorProps,
    recipe = swapRecipe,
    class: className,
    ...rest
  }: Props = $props();
</script>

<SwapPrimitive.Root {...rest} class={recipe({ class: cn(className), variant })}>
  {#if on}
    <SwapPrimitive.Indicator {...onIndicatorProps} type="on">
      {@render on()}
    </SwapPrimitive.Indicator>
  {/if}
  {#if off}
    <SwapPrimitive.Indicator {...offIndicatorProps} type="off">
      {@render off()}
    </SwapPrimitive.Indicator>
  {/if}
  {@render children?.()}
</SwapPrimitive.Root>
