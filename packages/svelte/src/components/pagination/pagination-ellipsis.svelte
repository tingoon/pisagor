<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationEllipsisProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { DotsThreeIcon } from "phosphor-svelte";
  import { usePagination } from "./pagination.context";

  let { class: className, ...rest }: PaginationEllipsisProps = $props();
  const styles = usePagination();
  const slots = $derived(styles.slots);
</script>

<PaginationPrimitive.Ellipsis
  {...rest}
  class={slots.ellipsis({ class: cn(className) })}
>
  <DotsThreeIcon />
</PaginationPrimitive.Ellipsis>
