<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourSpotlightProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourSpotlightProps = $props();
  const part = withContext(() => rest, { name: "Spotlight" });
</script>

<TourPrimitive.Spotlight {...part.props}>
  {@render children?.()}
</TourPrimitive.Spotlight>
