<script lang="ts">
import type { AvatarGroupProps as BaseAvatarGroupProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import Avatar from "./avatar.svelte";
import AvatarGroupCount from "./avatar-group-count.svelte";
import AvatarGroupRoot from "./avatar-group-root.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Maximum number of avatars to show; excess shown as "+N". */
  max?: number;
  /** User list rendered as avatars. */
  users: Array<{ fallback?: string; name?: string; src?: string }>;
} & BaseAvatarGroupProps;

let { max, users, ...rest }: Props = $props();

const visibleUsers = $derived(max !== undefined ? users.slice(0, max) : users);
const remainingCount = $derived(
  max !== undefined && users.length > max ? users.length - max : 0,
);
</script>

<AvatarGroupRoot {...rest}>
  {#each visibleUsers as user (user.src ?? user.fallback ?? user.name)}
    <Avatar alt={user.name ?? ""} fallback={user.fallback} src={user.src} />
  {/each}
  {#if remainingCount > 0}
    <AvatarGroupCount>+{remainingCount}</AvatarGroupCount>
  {/if}
</AvatarGroupRoot>
