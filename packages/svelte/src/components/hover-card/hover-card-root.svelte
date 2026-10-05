<script lang="ts">
import {
  HoverCard as HoverCardPrimitive,
  type HoverCardRootProps,
} from "@ark-ui/svelte/hover-card";
import type { HoverCardProps as BaseHoverCardProps } from "@pisagor/props";
import { hoverCardRecipe } from "@pisagor/recipes";
import { setHoverCardContext } from "./hover-card.context";

type Props = HoverCardRootProps & BaseHoverCardProps;

let {
  closeDelay = 300,
  openDelay = 600,
  positioning = { placement: "top" },
  children,
  recipe = hoverCardRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setHoverCardContext({
  get slots() {
    return slots;
  },
});
</script>

<HoverCardPrimitive.Root {...rest} {closeDelay} {openDelay} {positioning}>
  {@render children?.()}
</HoverCardPrimitive.Root>
