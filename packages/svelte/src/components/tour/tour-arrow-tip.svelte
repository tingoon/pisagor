<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourArrowTipProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourArrowTipProps = $props();
  const part = withContext(() => rest, { name: "ArrowTip" });
</script>

<TourPrimitive.ArrowTip {...part.props}>
  {@render children?.()}
</TourPrimitive.ArrowTip>
