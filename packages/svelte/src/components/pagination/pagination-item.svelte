<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationItemProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./pagination.context";

  let { children, ...rest }: PaginationItemProps = $props();
  const part = withContext(() => rest, { name: "Item" });
</script>

<PaginationPrimitive.Item {...part.props}>
  {@render children?.()}
</PaginationPrimitive.Item>
