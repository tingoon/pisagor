<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelContentProps as ArkProps,
    Portal,
  } from "@ark-ui/svelte";
  import { floatingPanelRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useFloatingPanel } from "./floating-panel.context";
  import FloatingPanelResizeTrigger from "./floating-panel-resize-trigger.svelte";

  type Props = ArkProps & { resizable?: boolean };

  let {
    children,
    resizable = true,
    class: className,
    ...rest
  }: Props = $props();
  const ctx = useFloatingPanel();
  const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<Portal>
  <FloatingPanelPrimitive.Positioner class={slots.positioner()}>
    <FloatingPanelPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(className) })}
    >
      {@render children?.()}
      {#if resizable}
        <FloatingPanelResizeTrigger axis="n" />
        <FloatingPanelResizeTrigger axis="e" />
        <FloatingPanelResizeTrigger axis="w" />
        <FloatingPanelResizeTrigger axis="s" />
        <FloatingPanelResizeTrigger axis="ne" />
        <FloatingPanelResizeTrigger axis="se" />
        <FloatingPanelResizeTrigger axis="sw" />
        <FloatingPanelResizeTrigger axis="nw" />
      {/if}
    </FloatingPanelPrimitive.Content>
  </FloatingPanelPrimitive.Positioner>
</Portal>
