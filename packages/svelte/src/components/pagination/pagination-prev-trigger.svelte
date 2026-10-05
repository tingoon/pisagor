<script lang="ts">
import {
  type PaginationPrevTriggerProps,
  Pagination as PaginationPrimitive,
} from "@ark-ui/svelte/pagination";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";

let {
  children,
  class: className,
  ...rest
}: PaginationPrevTriggerProps = $props();
</script>

<PaginationPrimitive.PrevTrigger
  {...rest}
  class={cn(buttonRecipe({ variant: "ghost" }).base(), className)}
>
  {#if children}
    {@render children()}
  {:else}
    <CaretLeftIcon />
    Previous
  {/if}
</PaginationPrimitive.PrevTrigger>
