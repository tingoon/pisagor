<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelStageTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import ArrowsOutIcon from "phosphor-svelte/lib/ArrowsOutIcon";
  import { useMessageResolver } from "../provider/context";

  const t = useMessageResolver();

  type Props = Omit<FloatingPanelStageTriggerProps, "stage"> & {
    size?: "icon-xs" | "icon-sm" | "icon-md";
    variant?: "ghost" | "outline";
  };

  let {
    size = "icon-xs",
    variant = "ghost",
    class: className,
    ...rest
  }: Props = $props();
</script>

<FloatingPanelPrimitive.StageTrigger
  aria-label={t("floatingPanel.maximize")}
  {...rest}
  class={cn(buttonRecipe({ size, variant }).base(), className)}
  stage="maximized"
  type="button"
>
  <ArrowsOutIcon />
</FloatingPanelPrimitive.StageTrigger>
