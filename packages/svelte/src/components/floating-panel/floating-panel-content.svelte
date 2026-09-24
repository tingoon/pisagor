<script lang="ts">
import type { FloatingPanelContentProps as ArkProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { Portal } from "@ark-ui/svelte/portal";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import { useFloatingPanel } from "./floating-panel.context";
import FloatingPanelResizeTrigger from "./floating-panel-resize-trigger.svelte";

type Props = Omit<ArkProps, "class"> & {
  class?: string | undefined;
  resizable?: boolean;
};

let { children, resizable = true, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<Portal>
  <FloatingPanelPrimitive.Positioner class={slots.positioner()}>
    <FloatingPanelPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
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
