<script lang="ts">
import type { FloatingPanelHeaderProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import { useFloatingPanel } from "./floating-panel.context";
import FloatingPanelDragTrigger from "./floating-panel-drag-trigger.svelte";

type Props = Omit<FloatingPanelHeaderProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelDragTrigger>
  <FloatingPanelPrimitive.Header {...rest} class={slots.header({ class: cn(className) })}>
    {@render children?.()}
  </FloatingPanelPrimitive.Header>
</FloatingPanelDragTrigger>
