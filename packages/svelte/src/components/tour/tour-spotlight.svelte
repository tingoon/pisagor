<script lang="ts">
import {
  Tour as TourPrimitive,
  type TourSpotlightProps,
} from "@ark-ui/svelte/tour";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

let { class: className, ...rest }: TourSpotlightProps = $props();
const ctx = useTourContext();
</script>

<TourPrimitive.Spotlight
  {...rest}
  class={ctx.slots.spotlight({ class: cn(className) })}
/>
