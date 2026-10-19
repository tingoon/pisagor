<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationRootProps,
  } from "@ark-ui/svelte";
  import type { PaginationRootContract } from "@pisagor/contracts";
  import { withProvider } from "./pagination.context";

  type Props = PaginationRootProps & PaginationRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<PaginationPrimitive.Root {...root.props}>
  {@render children?.()}
</PaginationPrimitive.Root>
