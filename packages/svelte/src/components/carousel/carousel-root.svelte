<script lang="ts">
import {
  type CarouselRootProps as ArkRootProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import type { CarouselProps as BaseCarouselProps } from "@pisagor/props";
import { withProvider } from "./carousel.context";

type Props = ArkRootProps & BaseCarouselProps;

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
