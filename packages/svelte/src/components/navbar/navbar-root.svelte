<script lang="ts">
  import type { NavbarProps as BaseNavbarProps } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./navbar.context";

  type Props = HTMLAttributes<HTMLElement> & BaseNavbarProps;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<header {...root.props}>{@render children?.()}</header>
