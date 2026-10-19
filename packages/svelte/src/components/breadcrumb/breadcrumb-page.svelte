<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withBreadcrumbItemContext } from "./breadcrumb.context";

  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const part = withBreadcrumbItemContext(() => rest, {
    defaultProps: { "aria-current": "page" },
    name: "Page",
  });
</script>

<span {...part.props}>{@render children?.()}</span>
