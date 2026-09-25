<script lang="ts">
import type { FloatingPanelControlProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import { useFloatingPanel } from "./floating-panel.context";

type Props = Omit<FloatingPanelControlProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelPrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</FloatingPanelPrimitive.Control>
