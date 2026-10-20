<script lang="ts">
  import { Tour as TourPrimitive, type TourRootProps } from "@ark-ui/svelte";
  import type { TourRootContract } from "@pisagor/contracts";
  import { withProvider } from "./tour.context";

  type Props = TourRootProps & TourRootContract;

  let { children, ...rest }: Props = $props();
  // The root renders no element; `base` is an empty slot.
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<TourPrimitive.Root {...root.props}>
  {@render children?.()}
</TourPrimitive.Root>
