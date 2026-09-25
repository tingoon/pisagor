<script lang="ts">
import type { FloatingPanelStageTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import ArrowsOutIcon from "phosphor-svelte/lib/ArrowsOutIcon";

type Props = Omit<FloatingPanelStageTriggerProps, "stage" | "class"> & {
  class?: string | undefined;
  size?: "icon-xs" | "icon-sm" | "icon-md";
  variant?: "ghost" | "outline";
};

let { size = "icon-xs", variant = "ghost", class: className, ...rest }: Props = $props();
</script>

<FloatingPanelPrimitive.StageTrigger
  {...rest}
  aria-label="Maximize"
  class={cn(buttonRecipe({ size, variant }).base(), className)}
  stage="maximized"
  type="button"
>
  <ArrowsOutIcon />
</FloatingPanelPrimitive.StageTrigger>
