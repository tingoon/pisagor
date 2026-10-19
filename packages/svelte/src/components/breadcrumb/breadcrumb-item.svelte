<script lang="ts">
  import type {
    BreadcrumbItemRootContract,
    BreadcrumbItemContract,
  } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withBreadcrumbItemProvider } from "./breadcrumb.context";

  type Props = HTMLAttributes<HTMLLIElement> &
    BreadcrumbItemRootContract &
    BreadcrumbItemContract;

  let { children, ...rest }: Props = $props();

  const item = withBreadcrumbItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<li {...item.props}>{@render children?.()}</li>
