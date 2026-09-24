<script lang="ts">
import type { FloatingPanelRootProps as ArkRootProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { setFloatingPanelContext } from "./floating-panel.context";

type Props = ArkRootProps & { recipe?: typeof floatingPanelRecipe };

let { children, recipe = floatingPanelRecipe, ...rest }: Props = $props();
const slots = $derived(recipe());
setFloatingPanelContext({
  get slots() {
    return slots;
  },
});
</script>

<FloatingPanelPrimitive.Root {...rest}> {@render children?.()} </FloatingPanelPrimitive.Root>
