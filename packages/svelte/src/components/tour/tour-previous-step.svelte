<script lang="ts">
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import type { Snippet } from "svelte";
import { useTourContext } from "./tour.context";

type Props = { children?: Snippet; class?: string | undefined };
let { children, class: className }: Props = $props();
const { tour } = useTourContext();
const prevAction = $derived(tour().step?.actions?.find((a) => a.action === "prev"));
</script>

{#if prevAction}
  <TourPrimitive.ActionTrigger
    action={prevAction}
    class={cn(buttonRecipe({ size: "sm", variant: "outline" }).base(), className)}
    type="button"
  >
    {#if children}
      {@render children()}
    {:else}
      <CaretLeftIcon />
      {prevAction.label}
    {/if}
  </TourPrimitive.ActionTrigger>
{/if}
