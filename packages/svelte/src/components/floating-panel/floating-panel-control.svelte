<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelControlProps,
  } from "@ark-ui/svelte";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useFloatingPanel } from "./floating-panel.context";

  let {
    children,
    class: className,
    ...rest
  }: FloatingPanelControlProps = $props();
  const ctx = useFloatingPanel();
  const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelPrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</FloatingPanelPrimitive.Control>
