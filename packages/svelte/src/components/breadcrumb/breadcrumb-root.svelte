<script lang="ts">
  import type { BreadcrumbRootContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { withBreadcrumbProvider } from "./breadcrumb.context";

  type Props = HTMLAttributes<HTMLElement> & BreadcrumbRootContract;

  let { "aria-label": ariaLabel, children, ...rest }: Props = $props();
  const { m } = useLocale();
  const root = withBreadcrumbProvider(
    () => ({ ...rest, "aria-label": m("breadcrumb.label", ariaLabel) }),
    { name: "Root", slot: "base" },
  );
</script>

<!-- Navigation landmark with a localized default `aria-label`. -->
<nav {...root.props}>{@render children?.()}</nav>
