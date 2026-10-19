<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationNextTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./pagination.context";

  let { children, ...rest }: PaginationNextTriggerProps = $props();
  const part = withContext(() => rest, { name: "NextTrigger" });
</script>

<PaginationPrimitive.NextTrigger {...part.props}>
  {@render children?.()}
</PaginationPrimitive.NextTrigger>
