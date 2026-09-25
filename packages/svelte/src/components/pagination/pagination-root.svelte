<script lang="ts">
import type { PaginationRootProps } from "@ark-ui/svelte/pagination";
import { Pagination as PaginationPrimitive } from "@ark-ui/svelte/pagination";
import { paginationRecipe } from "@pisagor/recipes/pagination";
import { cn } from "@pisagor/utils";
import { setPaginationContext } from "./pagination.context";
import PaginationItems from "./pagination-items.svelte";
import PaginationNextTrigger from "./pagination-next-trigger.svelte";
import PaginationPrevTrigger from "./pagination-prev-trigger.svelte";

type Props = Omit<PaginationRootProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof paginationRecipe;
};

let { recipe = paginationRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setPaginationContext({
  get slots() {
    return slots;
  },
});
</script>

<PaginationPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  {/if}
</PaginationPrimitive.Root>
