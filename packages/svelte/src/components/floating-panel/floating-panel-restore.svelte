<script lang="ts">
import {
  FloatingPanel as FloatingPanelPrimitive,
  type FloatingPanelStageTriggerProps,
} from "@ark-ui/svelte/floating-panel";
import { buttonRecipe, floatingPanelRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import ArrowsOutIcon from "phosphor-svelte/lib/ArrowsOutIcon";
import CornersInIcon from "phosphor-svelte/lib/CornersInIcon";
import { useMessageResolver } from "../provider/provider.context";
import { useFloatingPanel } from "./floating-panel.context";

const t = useMessageResolver();

type Props = Omit<FloatingPanelStageTriggerProps, "stage"> & {
  size?: "icon-xs" | "icon-sm" | "icon-md";
  variant?: "ghost" | "outline";
};

let {
  size = "icon-xs",
  variant = "outline",
  class: className,
  ...rest
}: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<FloatingPanelPrimitive.StageTrigger
  aria-label={t("floatingPanel.restore")}
  {...rest}
  class={cn(buttonRecipe({ size, variant }).base(), className)}
  stage="default"
  type="button"
>
  <CornersInIcon class={slots.maximizedIcon()} />
  <ArrowsOutIcon class={slots.minimizedIcon()} />
</FloatingPanelPrimitive.StageTrigger>
