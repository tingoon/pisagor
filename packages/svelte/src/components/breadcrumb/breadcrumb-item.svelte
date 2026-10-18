<script lang="ts">
  import type { BreadcrumbItemProps as BaseBreadcrumbItemProps } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withBreadcrumbItemProvider } from "./breadcrumb.context";

  type Props = HTMLAttributes<HTMLLIElement> & BaseBreadcrumbItemProps;

  let { children, ...rest }: Props = $props();

  const item = withBreadcrumbItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<li {...item.props}>{@render children?.()}</li>
