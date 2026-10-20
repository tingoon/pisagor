<script lang="ts">
  import { Tour as TourPrimitive, type TourContentProps } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<TourPrimitive.Content {...part.props}>
  {@render children?.()}
</TourPrimitive.Content>
