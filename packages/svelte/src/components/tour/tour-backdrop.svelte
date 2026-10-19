<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourBackdropProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourBackdropProps = $props();
  const part = withContext(() => rest, { name: "Backdrop" });
</script>

<TourPrimitive.Backdrop {...part.props}>
  {@render children?.()}
</TourPrimitive.Backdrop>
