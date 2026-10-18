<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationNextTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";

  let {
    children,
    class: className,
    ...rest
  }: PaginationNextTriggerProps = $props();
</script>

<PaginationPrimitive.NextTrigger
  {...rest}
  class={cn(buttonRecipe({ variant: "ghost" }).base(), className)}
>
  {#if children}
    {@render children()}
  {:else}
    Next
    <CaretRightIcon />
  {/if}
</PaginationPrimitive.NextTrigger>
