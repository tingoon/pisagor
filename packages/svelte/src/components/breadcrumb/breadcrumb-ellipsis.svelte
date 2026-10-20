<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { withBreadcrumbContext } from "./breadcrumb.context";

  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const { m } = useLocale();
  const part = withBreadcrumbContext(() => rest, { name: "Ellipsis" });
</script>

<!-- Collapsed-items marker; render your icon inside. Adds localized screen-reader text. -->
<span {...part.props}>
  {@render children?.()}
  <span class="sr-only">{m("breadcrumb.more")}</span>
</span>
