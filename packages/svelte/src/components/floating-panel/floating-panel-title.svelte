<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelTitleProps,
  } from "@ark-ui/svelte";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./floating-panel.context";

  let {
    children,
    class: className,
    ...rest
  }: FloatingPanelTitleProps = $props();
  const ctx = useStyles();
  const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelPrimitive.Title
  {...rest}
  class={slots.title({ class: cn(className) })}
>
  {@render children?.()}
</FloatingPanelPrimitive.Title>
