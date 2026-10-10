<script lang="ts">
import {
  type TooltipContentProps,
  Tooltip as TooltipPrimitive,
} from "@ark-ui/svelte/tooltip";
import { withContext } from "./tooltip.context";

let { children, ...rest }: TooltipContentProps = $props();
const part = withContext(() => rest, { name: "Content" });
</script>

<TooltipPrimitive.Content {...part.props}>
  {@render children?.()}
</TooltipPrimitive.Content>
