<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourActionTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourActionTriggerProps = $props();
  const part = withContext(() => rest, { name: "ActionTrigger" });
</script>

<TourPrimitive.ActionTrigger {...part.props}>
  {@render children?.()}
</TourPrimitive.ActionTrigger>
