<script lang="ts">
  import { Pagination as PaginationPrimitive } from "@ark-ui/svelte";
  import type { PaginationContract } from "@pisagor/contracts";
  import {
    CaretLeftIcon,
    CaretRightIcon,
    DotsThreeIcon,
  } from "phosphor-svelte";
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import PaginationEllipsis from "./pagination-ellipsis.svelte";
  import PaginationItem from "./pagination-item.svelte";
  import PaginationNextTrigger from "./pagination-next-trigger.svelte";
  import PaginationPrevTrigger from "./pagination-prev-trigger.svelte";
  import PaginationRoot from "./pagination-root.svelte";

  type Props = Omit<ComponentProps<typeof PaginationRoot>, "children"> &
    PaginationContract;

  let { classNames, ...rest }: Props = $props();
  const { m } = useLocale();
</script>

<PaginationRoot {...rest}>
  <PaginationPrevTrigger class={classNames?.prevTrigger}>
    {#snippet asChild(props)}
      <Button {...props()} variant="ghost">
        <CaretLeftIcon />
        {m("pagination.previous")}
      </Button>
    {/snippet}
  </PaginationPrevTrigger>
  <PaginationPrimitive.Context>
    {#snippet render(api)}
      {#each api().pages as page, index (index)}
        {#if page.type === "page"}
          <PaginationItem
            class={classNames?.item}
            type="page"
            value={page.value}
          >
            {#snippet asChild(props)}
              <Button {...props()} size="icon-md" variant="ghost">
                {page.value}
              </Button>
            {/snippet}
          </PaginationItem>
        {:else}
          <PaginationEllipsis class={classNames?.ellipsis} {index}>
            <DotsThreeIcon />
          </PaginationEllipsis>
        {/if}
      {/each}
    {/snippet}
  </PaginationPrimitive.Context>
  <PaginationNextTrigger class={classNames?.nextTrigger}>
    {#snippet asChild(props)}
      <Button {...props()} variant="ghost">
        {m("pagination.next")}
        <CaretRightIcon />
      </Button>
    {/snippet}
  </PaginationNextTrigger>
</PaginationRoot>
