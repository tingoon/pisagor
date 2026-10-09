<script lang="ts">
import {
  Avatar as AvatarPrimitive,
  type AvatarRootProps,
} from "@ark-ui/svelte/avatar";
import type { AvatarProps as BaseAvatarProps } from "@pisagor/props";
import { withProvider } from "./avatar.context";

type Props = AvatarRootProps & BaseAvatarProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<AvatarPrimitive.Root {...root.props}>
  {@render children?.()}
</AvatarPrimitive.Root>
