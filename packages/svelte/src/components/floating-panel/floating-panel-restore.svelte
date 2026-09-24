<script lang="ts">
import type { FloatingPanelStageTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { buttonRecipe } from "@pisagor/recipes/button";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import ArrowsOutIcon from "phosphor-svelte/lib/ArrowsOutIcon";
import CornersInIcon from "phosphor-svelte/lib/CornersInIcon";
import { useFloatingPanel } from "./floating-panel.context";

type Props = Omit<FloatingPanelStageTriggerProps, "stage" | "class"> & {
  class?: string | undefined;
  size?: "icon-xs" | "icon-sm" | "icon-md";
  variant?: "ghost" | "outline";
};

let { size = "icon-xs", variant = "outline", class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelPrimitive.StageTrigger
  {...rest}
  aria-label="Restore"
  class={cn(buttonRecipe({ size, variant }).base(), className)}
  stage="default"
  type="button"
>
  <CornersInIcon class={slots.maximizedIcon()} />
  <ArrowsOutIcon class={slots.minimizedIcon()} />
</FloatingPanelPrimitive.StageTrigger>
