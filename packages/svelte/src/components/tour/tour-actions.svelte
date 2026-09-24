<script lang="ts">
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { buttonRecipe } from "@pisagor/recipes/button";
import { dialogRecipe } from "@pisagor/recipes/dialog";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useTourContext } from "./tour.context";

type Props = { class?: string | undefined };
let { class: className }: Props = $props();
const { slots, tour } = useTourContext();
const dialogSlots = $derived(dialogRecipe());
const actions = $derived(tour().step?.actions ?? []);
</script>

{#if actions.length > 0}
  <TourPrimitive.Control>
    <div
      class={cn(dialogSlots.footer(), slots.actions({ class: cn(className) }))}
      data-part="actions"
      data-scope="tour"
    >
      {#each actions as action (action.label)}
        <TourPrimitive.ActionTrigger
          {action}
          class={cn(
  buttonRecipe({
    size: "sm",
    variant: action.action === "dismiss" || action.action === "prev" ? "outline" : "default",
  }).base(),
)}
          type="button"
        >
          {#if action.action === "prev"}
            <CaretLeftIcon />
          {/if}
          {action.label}
          {#if action.action === "next"}
            <CaretRightIcon />
          {/if}
        </TourPrimitive.ActionTrigger>
      {/each}
    </div>
  </TourPrimitive.Control>
{/if}
