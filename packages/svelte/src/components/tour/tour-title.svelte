<script lang="ts">
  import { Tour as TourPrimitive, type TourTitleProps } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourTitleProps = $props();
  const part = withContext(() => rest, { name: "Title" });
</script>

<TourPrimitive.Title {...part.props}>
  {@render children?.()}
</TourPrimitive.Title>
