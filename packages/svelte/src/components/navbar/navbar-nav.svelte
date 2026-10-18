<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { withContext } from "./navbar.context";

  const { m } = useLocale();

  let {
    "aria-label": ariaLabel = m("navbar.label"),
    children,
    ...rest
  }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, { name: "Nav" });
</script>

<nav {...part.props} aria-label={ariaLabel}>
  {@render children?.()}
</nav>
