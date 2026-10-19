<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { FloatingPanelRootContract } from "@pisagor/contracts";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { Context } from "./floating-panel.context";

  type Props = ArkRootProps & FloatingPanelRootContract;

  let { children, recipe = floatingPanelRecipe, ...rest }: Props = $props();
  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<FloatingPanelPrimitive.Root {...rest}>
  {@render children?.()}
</FloatingPanelPrimitive.Root>
