<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselPrevTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./carousel.context";

  /**
   * Previous trigger with a localized default `aria-label`; pass your button /
   * icon.
   */
  let { children, ...rest }: CarouselPrevTriggerProps = $props();
  const { m } = useLocale();
  const part = withContext(
    () => ({ "aria-label": m("carousel.previous"), ...rest }),
    { name: "PrevTrigger" },
  );
</script>

<CarouselPrimitive.PrevTrigger {...part.props}>
  {@render children?.()}
</CarouselPrimitive.PrevTrigger>
