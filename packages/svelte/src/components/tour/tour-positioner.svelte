<script lang="ts">
import {
  type TourPositionerProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

let { children, class: className, ...rest }: TourPositionerProps = $props();
const { slots } = useTourContext();
</script>

<TourPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className) })}
>
  {@render children?.()}
</TourPrimitive.Positioner>
