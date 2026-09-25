<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { avatarGroupRecipe } from "@pisagor/recipes/avatar";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import Avatar from "./avatar.svelte";
import { setAvatarGroupContext } from "./avatar-group.context";

type User = { fallback?: string; name?: string; src?: string };

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "children"> & {
  class?: string | undefined;
  max?: number;
  recipe?: typeof avatarGroupRecipe;
  users: User[];
};

let { max, users, recipe = avatarGroupRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());
const visibleUsers = $derived(max !== undefined ? users.slice(0, max) : users);
const remainingCount = $derived(max !== undefined && users.length > max ? users.length - max : 0);

setAvatarGroupContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="group"
  data-scope="avatar"
>
  {#each visibleUsers as user (user.src ?? user.fallback ?? user.name)}
    <Avatar alt={user.name ?? ""} fallback={user.fallback} src={user.src} />
  {/each}
  {#if remainingCount > 0}
    <Ark as="div" class={slots.count()} data-part="group-count" data-scope="avatar">
      +{remainingCount}
    </Ark>
  {/if}
</Ark>
