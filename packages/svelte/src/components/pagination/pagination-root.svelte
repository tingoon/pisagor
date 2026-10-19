<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationRootProps,
  } from "@ark-ui/svelte";
  import type { PaginationRootContract } from "@pisagor/contracts";
  import { withProvider } from "./pagination.context";
  import PaginationItems from "./pagination-items.svelte";
  import PaginationNextTrigger from "./pagination-next-trigger.svelte";
  import PaginationPrevTrigger from "./pagination-prev-trigger.svelte";

  type Props = PaginationRootProps & PaginationRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<PaginationPrimitive.Root {...root.props}>
  {#if children}
    {@render children()}
  {:else}
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  {/if}
</PaginationPrimitive.Root>
