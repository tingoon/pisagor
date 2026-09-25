<script lang="ts">
import type { FloatingPanelTitleProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import { useFloatingPanel } from "./floating-panel.context";

type Props = Omit<FloatingPanelTitleProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</FloatingPanelPrimitive.Title>
