<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourProgressTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourProgressTextProps = $props();
  const part = withContext(() => rest, { name: "ProgressText" });
</script>

<TourPrimitive.ProgressText {...part.props}>
  {@render children?.()}
</TourPrimitive.ProgressText>
