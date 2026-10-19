<script lang="ts">
  import type { NavbarRootContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./navbar.context";

  type Props = HTMLAttributes<HTMLElement> & NavbarRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<header {...root.props}>{@render children?.()}</header>
