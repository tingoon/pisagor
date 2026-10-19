<script lang="ts">
  import type { MenuRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { withProvider } from "./menu.context";

  const { m } = useLocale();

  type Props = HTMLAttributes<HTMLElement> & {
    children?: Snippet;
  } & MenuRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, {
    defaultProps: { "aria-label": m("menu.label") },
    name: "Root",
  });
</script>

<nav {...root.props}>{@render children?.()}</nav>
