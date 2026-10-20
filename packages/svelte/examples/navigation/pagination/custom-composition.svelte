<script lang="ts">
  import { Button, Pagination } from "@pisagor/svelte";
  import {
    CaretLeftIcon,
    CaretRightIcon,
    DotsThreeIcon,
  } from "phosphor-svelte";
</script>

<Pagination.Root count={50} pageSize={10}>
  <Pagination.PrevTrigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="ghost">
        <CaretLeftIcon />
        Previous
      </Button>
    {/snippet}
  </Pagination.PrevTrigger>
  <Pagination.Context>
    {#snippet render(api)}
      {#each api().pages as page, index (index)}
        {#if page.type === "page"}
          <Pagination.Item type="page" value={page.value}>
            {#snippet asChild(props)}
              <Button {...props()} size="icon-md" variant="ghost">
                {page.value}
              </Button>
            {/snippet}
          </Pagination.Item>
        {:else}
          <Pagination.Ellipsis {index}>
            <DotsThreeIcon />
          </Pagination.Ellipsis>
        {/if}
      {/each}
    {/snippet}
  </Pagination.Context>
  <Pagination.NextTrigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="ghost">
        Next
        <CaretRightIcon />
      </Button>
    {/snippet}
  </Pagination.NextTrigger>
</Pagination.Root>
