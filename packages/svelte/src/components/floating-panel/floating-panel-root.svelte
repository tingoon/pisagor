<script lang="ts">
import {
  type FloatingPanelRootProps as ArkRootProps,
  FloatingPanel as FloatingPanelPrimitive,
} from "@ark-ui/svelte/floating-panel";
import type { FloatingPanelProps as BaseFloatingPanelProps } from "@pisagor/props";
import { floatingPanelRecipe } from "@pisagor/recipes";
import { setFloatingPanelContext } from "./floating-panel.context";

type Props = ArkRootProps & BaseFloatingPanelProps;

let { children, recipe = floatingPanelRecipe, ...rest }: Props = $props();
const slots = $derived(recipe());
setFloatingPanelContext({
  get slots() {
    return slots;
  },
});
</script>

<FloatingPanelPrimitive.Root {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.Root>
