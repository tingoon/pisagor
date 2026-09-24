<script lang="ts">
import type { PaginationPrevTriggerProps } from "@ark-ui/svelte/pagination";
import { Pagination as PaginationPrimitive } from "@ark-ui/svelte/pagination";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";

type Props = Omit<PaginationPrevTriggerProps, "class"> & { class?: string | undefined };

let { children, class: className, ...rest }: Props = $props();
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
