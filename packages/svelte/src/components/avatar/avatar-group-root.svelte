<script lang="ts">
  import type { AvatarGroupProps as BaseAvatarGroupProps } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./avatar-group.context";

  type Props = HTMLAttributes<HTMLDivElement> & BaseAvatarGroupProps;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>{@render children?.()}</div>
