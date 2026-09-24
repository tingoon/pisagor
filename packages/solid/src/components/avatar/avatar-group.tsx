import { ark } from "@ark-ui/solid/factory";
import { avatarGroupRecipe } from "@pisagor/recipes/avatar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { Avatar } from "./avatar";
import { AvatarGroupContext, useAvatarGroup } from "./avatar-group.context";

export interface AvatarGroupRootProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof avatarGroupRecipe;
}

export interface AvatarGroupProps extends Omit<AvatarGroupRootProps, "children"> {
  max?: number;
  users: Array<{ src?: string; fallback?: string; name?: string }>;
}

export type AvatarGroupCountProps = ComponentProps<typeof ark.div>;

export function AvatarGroupRoot(props: AvatarGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? avatarGroupRecipe)();

  return (
    <AvatarGroupContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="group"
        data-scope="avatar"
      >
        {local.children}
      </ark.div>
    </AvatarGroupContext>
  );
}

export function AvatarGroupCount(props: AvatarGroupCountProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAvatarGroup();
  return (
    <ark.div
      {...rest}
      class={slots.count({ class: cn(local.class) })}
      data-part="group-count"
      data-scope="avatar"
    />
  );
}

export function AvatarGroupShorthand(props: AvatarGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["max", "users"]);
  const visibleUsers = () =>
    local.max !== undefined ? local.users.slice(0, local.max) : local.users;
  const remainingCount = () =>
    local.max !== undefined && local.users.length > local.max ? local.users.length - local.max : 0;

  return (
    <AvatarGroupRoot {...rest}>
      <For each={visibleUsers()}>
        {(user) => <Avatar alt={user.name ?? ""} fallback={user.fallback} src={user.src} />}
      </For>
      <Show when={remainingCount() > 0}>
        <AvatarGroupCount>+{remainingCount()}</AvatarGroupCount>
      </Show>
    </AvatarGroupRoot>
  );
}
