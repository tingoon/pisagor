<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselAutoplayTriggerProps,
    useCarouselContext,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./carousel.context";

  /** Autoplay trigger with a localized play / pause `aria-label`. */
  let { children, ...rest }: CarouselAutoplayTriggerProps = $props();
  const { m } = useLocale();
  const carousel = useCarouselContext();
  const part = withContext(
    () => ({
      "aria-label": m(
        carousel().isPlaying ? "carousel.pause" : "carousel.play",
      ),
      ...rest,
    }),
    { name: "AutoplayTrigger" },
  );
</script>

<CarouselPrimitive.AutoplayTrigger {...part.props}>
  {@render children?.()}
</CarouselPrimitive.AutoplayTrigger>
