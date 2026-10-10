<script lang="ts">
import {
  type TooltipArrowProps,
  Tooltip as TooltipPrimitive,
} from "@ark-ui/svelte/tooltip";
import { withContext } from "./tooltip.context";

let { children, ...rest }: TooltipArrowProps = $props();
const part = withContext(() => rest, { name: "Arrow" });
</script>

<TooltipPrimitive.Arrow {...part.props}>
  {@render children?.()}
</TooltipPrimitive.Arrow>
