<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselIndicatorProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./carousel.context";

  let { class: className, ...rest }: CarouselIndicatorProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CarouselPrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
/>
