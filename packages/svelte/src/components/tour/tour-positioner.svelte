<script lang="ts">
import {
  type TourPositionerProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";
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
