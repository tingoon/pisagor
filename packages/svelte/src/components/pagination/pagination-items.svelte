<script lang="ts">
import { Pagination as PaginationPrimitive } from "@ark-ui/svelte/pagination";
import PaginationEllipsis from "./pagination-ellipsis.svelte";
import PaginationItem from "./pagination-item.svelte";
</script>

<PaginationPrimitive.Context>
  {#snippet render(
  pagination,
)}
    {@const pages = pagination().pages}
    {#each pages as page, index (page.type === "page" ? page.value : `ellipsis-${index}`)}
      {#if page.type === "page"}
        <PaginationItem type="page" value={page.value}>{page.value}</PaginationItem>
      {:else}
        <PaginationEllipsis {index} />
      {/if}
    {/each}
  {/snippet}
</PaginationPrimitive.Context>
