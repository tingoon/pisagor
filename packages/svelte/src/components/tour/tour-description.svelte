<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourDescriptionProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTourContext } from "./tour.context";

  let { class: className, children, ...rest }: TourDescriptionProps = $props();
  const ctx = useTourContext();
</script>

<TourPrimitive.Description
  {...rest}
  class={ctx.slots.description({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    {ctx.tour().step?.description}
  {/if}
</TourPrimitive.Description>
