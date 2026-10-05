<script lang="ts">
import {
  type FloatingPanelHeaderProps,
  FloatingPanel as FloatingPanelPrimitive,
} from "@ark-ui/svelte/floating-panel";
import { floatingPanelRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useFloatingPanel } from "./floating-panel.context";
import FloatingPanelDragTrigger from "./floating-panel-drag-trigger.svelte";

let {
  children,
  class: className,
  ...rest
}: FloatingPanelHeaderProps = $props();
const ctx = useFloatingPanel();
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
