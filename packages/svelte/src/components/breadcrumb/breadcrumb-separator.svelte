<script lang="ts">
  import type { HTMLLiAttributes } from "svelte/elements";
  import { withBreadcrumbContext } from "./breadcrumb.context";

  let { children, ...rest }: HTMLLiAttributes = $props();
  const part = withBreadcrumbContext(() => rest, {
    defaultProps: { "aria-hidden": "true", role: "presentation" },
    name: "Separator",
  });
</script>

<li {...part.props}>{@render children?.()}</li>
