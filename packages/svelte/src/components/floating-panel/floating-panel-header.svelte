<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelHeaderProps,
  } from "@ark-ui/svelte";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./floating-panel.context";
  import FloatingPanelDragTrigger from "./floating-panel-drag-trigger.svelte";

  let {
    children,
    class: className,
    ...rest
  }: FloatingPanelHeaderProps = $props();
  const ctx = useStyles();
  const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelDragTrigger>
  <FloatingPanelPrimitive.Header
    {...rest}
    class={slots.header({ class: cn(className) })}
  >
    {@render children?.()}
  </FloatingPanelPrimitive.Header>
</FloatingPanelDragTrigger>
