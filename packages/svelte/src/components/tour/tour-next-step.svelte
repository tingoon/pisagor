<script lang="ts">
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import type { Snippet } from "svelte";
import { useTourContext } from "./tour.context";

type Props = { children?: Snippet; class?: string | undefined };
let { children, class: className }: Props = $props();
const { tour } = useTourContext();
const action = $derived(
  tour().step?.actions?.find((a) => a.action === "next" || a.action === "dismiss"),
);
</script>

{#if action}
  <TourPrimitive.ActionTrigger
    {action}
    class={cn(buttonRecipe({ size: "sm", variant: "default" }).base(), className)}
    type="button"
  >
    {#if children}
      {@render children()}
    {:else}
      {action.label}
      {#if action.action === "next"}
        <CaretRightIcon />
      {/if}
    {/if}
  </TourPrimitive.ActionTrigger>
{/if}
