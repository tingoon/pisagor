<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourCloseTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourCloseTriggerProps = $props();
  const part = withContext(() => rest, { name: "CloseTrigger", slot: "close" });
</script>

<TourPrimitive.CloseTrigger {...part.props}>
  {@render children?.()}
</TourPrimitive.CloseTrigger>
