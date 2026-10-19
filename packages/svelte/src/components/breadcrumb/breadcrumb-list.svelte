<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withBreadcrumbContext } from "./breadcrumb.context";

  let { children, ...rest }: HTMLAttributes<HTMLOListElement> = $props();
  const part = withBreadcrumbContext(() => rest, { name: "List" });
</script>

<ol {...part.props}>{@render children?.()}</ol>
