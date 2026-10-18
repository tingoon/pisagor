<script lang="ts">
  import type { NavbarRootContract } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./navbar.context";

  type Props = HTMLAttributes<HTMLElement> & NavbarRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<header {...root.props}>{@render children?.()}</header>
