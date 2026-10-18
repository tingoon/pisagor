<script lang="ts">
  import { Tour as TourPrimitive } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretLeftIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import { useTourContext } from "./tour.context";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };
  let { children, class: className }: Props = $props();
  const { tour } = useTourContext();
  const prevAction = $derived(
    tour().step?.actions?.find((a) => a.action === "prev"),
  );
</script>

{#if prevAction}
  <TourPrimitive.ActionTrigger
    action={prevAction}
    class={cn(
      buttonRecipe({ size: "sm", variant: "outline" }).base(),
      className,
    )}
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
