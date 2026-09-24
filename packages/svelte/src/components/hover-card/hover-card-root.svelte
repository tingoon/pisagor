<script lang="ts">
import type { HoverCardRootProps } from "@ark-ui/svelte/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/svelte/hover-card";
import { hoverCardRecipe } from "@pisagor/recipes/hover-card";
import { setHoverCardContext } from "./hover-card.context";

type Props = HoverCardRootProps & { recipe?: typeof hoverCardRecipe };

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
