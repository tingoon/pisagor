<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationEllipsisProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./pagination.context";

  let { children, ...rest }: PaginationEllipsisProps = $props();
  const part = withContext(() => rest, { name: "Ellipsis" });
</script>

<PaginationPrimitive.Ellipsis {...part.props}>
  {@render children?.()}
</PaginationPrimitive.Ellipsis>
