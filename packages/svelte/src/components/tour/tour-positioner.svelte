<script lang="ts">
import type { TourPositionerProps } from "@ark-ui/svelte/tour";
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { useTourContext } from "./tour.context";

type Props = Omit<TourPositionerProps, "class"> & {
  class?: string | undefined;
};
let { children, class: className, ...rest }: Props = $props();
const { slots } = useTourContext();
</script>

<TourPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: className })}
>
  {@render children?.()}
</TourPrimitive.Positioner>
