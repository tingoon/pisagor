<script lang="ts">
  import { Pagination } from "@pisagor/svelte";
  import {
    CaretLeftIcon,
    CaretRightIcon,
    DotsThreeIcon,
  } from "phosphor-svelte";
</script>

<Pagination.Root count={50} pageSize={10}>
  <Pagination.ItemLink page="previous">
    <CaretLeftIcon />
    Previous
  </Pagination.ItemLink>
  <Pagination.Context>
    {#snippet render(api)}
      {#each api().pages as page, index (index)}
        {#if page.type === "page"}
          <Pagination.ItemLink page={page.value}>
            {page.value}
          </Pagination.ItemLink>
        {:else}
          <Pagination.Ellipsis {index}>
            <DotsThreeIcon />
          </Pagination.Ellipsis>
        {/if}
      {/each}
    {/snippet}
  </Pagination.Context>
  <Pagination.ItemLink page="next">
    Next
    <CaretRightIcon />
  </Pagination.ItemLink>
</Pagination.Root>
