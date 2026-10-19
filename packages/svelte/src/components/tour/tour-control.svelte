<script lang="ts">
  import { Tour as TourPrimitive, type TourControlProps } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";

  let { children, ...rest }: TourControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<TourPrimitive.Control {...part.props}>
  {@render children?.()}
</TourPrimitive.Control>
