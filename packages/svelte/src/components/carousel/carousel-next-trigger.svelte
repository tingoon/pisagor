<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselNextTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./carousel.context";

  /**
   * Next trigger with a localized default `aria-label`; pass your button /
   * icon.
   */
  let { children, ...rest }: CarouselNextTriggerProps = $props();
  const { m } = useLocale();
  const part = withContext(
    () => ({ "aria-label": m("carousel.next"), ...rest }),
    { name: "NextTrigger" },
  );
</script>

<CarouselPrimitive.NextTrigger {...part.props}>
  {@render children?.()}
</CarouselPrimitive.NextTrigger>
