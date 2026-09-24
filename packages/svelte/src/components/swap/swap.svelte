<script lang="ts">
import type { SwapIndicatorProps, SwapRootProps } from "@ark-ui/svelte/swap";
import { Swap as SwapPrimitive } from "@ark-ui/svelte/swap";
import { type SwapVariantProps, swapRecipe } from "@pisagor/recipes/swap";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";

type Props = Omit<SwapRootProps, "class" | "children"> &
  SwapVariantProps & {
    class?: string | undefined;
    children?: Snippet;
    off?: Snippet;
    on?: Snippet;
    offIndicatorProps?: Omit<SwapIndicatorProps, "children" | "type" | "class">;
    onIndicatorProps?: Omit<SwapIndicatorProps, "children" | "type" | "class">;
    recipe?: typeof swapRecipe;
  };

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
