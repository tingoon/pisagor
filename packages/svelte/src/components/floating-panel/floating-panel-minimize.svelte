<script lang="ts">
import type { FloatingPanelStageTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";

type Props = Omit<FloatingPanelStageTriggerProps, "stage" | "class"> & {
  class?: string | undefined;
  size?: "icon-xs" | "icon-sm" | "icon-md";
  variant?: "ghost" | "outline";
};

let { size = "icon-xs", variant = "ghost", class: className, ...rest }: Props = $props();
</script>

<FloatingPanelPrimitive.StageTrigger
  {...rest}
  aria-label="Minimize"
  class={cn(buttonRecipe({ size, variant }).base(), className)}
  stage="minimized"
  type="button"
>
  <MinusIcon />
</FloatingPanelPrimitive.StageTrigger>
