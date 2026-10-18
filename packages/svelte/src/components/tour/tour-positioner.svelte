<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourPositionerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTourContext } from "./tour.context";

  let { children, class: className, ...rest }: TourPositionerProps = $props();
  const ctx = useTourContext();
</script>

<TourPrimitive.Positioner
  {...rest}
  class={ctx.slots.positioner({ class: cn(className) })}
>
  {@render children?.()}
</TourPrimitive.Positioner>
