<script lang="ts">
import {
  Tooltip as TooltipPrimitive,
  type TooltipRootProps,
} from "@ark-ui/svelte/tooltip";
import type { TooltipProps as BaseTooltipProps } from "@pisagor/props";
import { tooltipRecipe } from "@pisagor/recipes";
import { Context } from "./tooltip.context";

type Props = TooltipRootProps & BaseTooltipProps;

let {
  closeDelay = 150,
  openDelay = 400,
  positioning = { placement: "top" },
  children,
  recipe = tooltipRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

Context.set({
  get slots() {
    return slots;
  },
});
</script>

<TooltipPrimitive.Root {...rest} {closeDelay} {openDelay} {positioning}>
  {@render children?.()}
</TooltipPrimitive.Root>
