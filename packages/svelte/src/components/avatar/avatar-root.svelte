<script lang="ts">
  import {
    Avatar as AvatarPrimitive,
    type AvatarRootProps,
  } from "@ark-ui/svelte";
  import type { AvatarRootContract } from "@pisagor/contracts";
  import { withProvider } from "./avatar.context";

  type Props = AvatarRootProps & AvatarRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<AvatarPrimitive.Root {...root.props}>
  {@render children?.()}
</AvatarPrimitive.Root>
