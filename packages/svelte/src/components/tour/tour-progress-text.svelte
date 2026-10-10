<script lang="ts">
import {
  Tour as TourPrimitive,
  type TourProgressTextProps,
} from "@ark-ui/svelte/tour";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

let { class: className, children, ...rest }: TourProgressTextProps = $props();
const ctx = useTourContext();
</script>

<TourPrimitive.ProgressText
  {...rest}
  class={ctx.slots.progressText({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    {ctx.tour().getProgressText()}
  {/if}
</TourPrimitive.ProgressText>
