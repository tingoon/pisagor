<script lang="ts">
import {
  type TourControlProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";
import { buttonRecipe, dialogRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useTourContext } from "./tour.context";

let { class: className, ...rest }: Omit<TourControlProps, "children"> =
  $props();
const ctx = useTourContext();
const dialogSlots = $derived(dialogRecipe());
const actions = $derived(ctx.tour().step?.actions ?? []);
</script>

{#if actions.length > 0}
  <TourPrimitive.Control
    {...rest}
    class={cn(
      dialogSlots.footer(),
      ctx.slots.actions({ class: cn(className) }),
    )}
    data-part="actions"
    data-scope="tour"
  >
    {#each actions as action (action.label)}
      <TourPrimitive.ActionTrigger
        {action}
        class={buttonRecipe({
          size: "sm",
          variant:
            action.action === "dismiss" || action.action === "prev"
              ? "outline"
              : "default",
        }).base()}
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
  </TourPrimitive.Control>
{/if}
