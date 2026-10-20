<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<TourPrimitive.Positioner {...part.props}>
  {@render children?.()}
</TourPrimitive.Positioner>
