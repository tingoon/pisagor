<script lang="ts">
  import type { AvatarGroupRootContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./avatar-group.context";

  type Props = HTMLAttributes<HTMLDivElement> & AvatarGroupRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<div {...root.props}>{@render children?.()}</div>
