<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourDescriptionProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourDescriptionProps = $props();
  const part = withContext(() => rest, { name: "Description" });
</script>

<TourPrimitive.Description {...part.props}>
  {@render children?.()}
</TourPrimitive.Description>
