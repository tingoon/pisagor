<script lang="ts">
import {
  Tour as TourPrimitive,
  type TourTitleProps,
} from "@ark-ui/svelte/tour";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

let { class: className, children, ...rest }: TourTitleProps = $props();
const ctx = useTourContext();
</script>

<TourPrimitive.Title
  {...rest}
  class={ctx.slots.title({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    {ctx.tour().step?.title}
  {/if}
</TourPrimitive.Title>
