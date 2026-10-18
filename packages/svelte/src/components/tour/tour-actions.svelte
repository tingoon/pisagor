<script lang="ts">
  import {
    Ark,
    Tour as TourPrimitive,
    type TourControlProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe, dialogRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { isInsideControl } from "../../internal";
  import { TOUR_INSIDE_CONTROL, useTourContext } from "./tour.context";

  let { class: className, ...rest }: Omit<TourControlProps, "children"> =
    $props();
  const ctx = useTourContext();
  const dialogSlots = $derived(dialogRecipe());
  const insideControl = isInsideControl(TOUR_INSIDE_CONTROL);
  const actions = $derived(ctx.tour().step?.actions ?? []);
</script>

{#snippet items()}
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
{/snippet}

{#if actions.length > 0}
  {#if insideControl}
    <Ark
      as="div"
      {...rest}
      class={ctx.slots.actions({ class: cn(className) })}
      data-part="actions"
      data-scope="tour"
    >
      {@render items()}
    </Ark>
  {:else}
    <TourPrimitive.Control
      {...rest}
      class={cn(
        dialogSlots.footer(),
        ctx.slots.actions({ class: cn(className) }),
      )}
      data-part="actions"
      data-scope="tour"
    >
      {@render items()}
    </TourPrimitive.Control>
  {/if}
{/if}
