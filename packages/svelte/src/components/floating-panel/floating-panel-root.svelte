<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { FloatingPanelProps as BaseFloatingPanelProps } from "@pisagor/props";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { Context } from "./floating-panel.context";

  type Props = ArkRootProps & BaseFloatingPanelProps;

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
