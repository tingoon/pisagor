<script lang="ts">
import type { PaginationNextTriggerProps } from "@ark-ui/svelte/pagination";
import { Pagination as PaginationPrimitive } from "@ark-ui/svelte/pagination";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";

type Props = Omit<PaginationNextTriggerProps, "class"> & { class?: string | undefined };

let { children, class: className, ...rest }: Props = $props();
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
