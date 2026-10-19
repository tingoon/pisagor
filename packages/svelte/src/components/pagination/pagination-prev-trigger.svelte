<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationPrevTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./pagination.context";

  let { children, ...rest }: PaginationPrevTriggerProps = $props();
  const part = withContext(() => rest, { name: "PrevTrigger" });
</script>

<PaginationPrimitive.PrevTrigger {...part.props}>
  {@render children?.()}
</PaginationPrimitive.PrevTrigger>
