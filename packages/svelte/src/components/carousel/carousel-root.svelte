<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { CarouselRootContract } from "@pisagor/contracts";
  import { withProvider } from "./carousel.context";

  type Props = ArkRootProps & Omit<CarouselRootContract, "slides">;

  let {
    children,
    spacing = "calc(var(--spacing) * 4)",
    ...rest
  }: Props = $props();
  const root = withProvider(() => ({ ...rest, spacing }), {
    name: "Root",
    slot: "base",
  });
</script>

<CarouselPrimitive.Root {...root.props}>
  {@render children?.()}
</CarouselPrimitive.Root>
