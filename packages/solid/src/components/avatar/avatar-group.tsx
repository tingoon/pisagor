import { ark } from "@ark-ui/solid/factory";
import type { AvatarGroupProps as BaseAvatarGroupRootProps } from "@pisagor/props";
import { avatarGroupRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import { Avatar } from "./avatar";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "AvatarGroup",
  recipe: avatarGroupRecipe,
});
// #endregion

export interface AvatarGroupRootProps
  extends ComponentProps<typeof ark.div>,
    BaseAvatarGroupRootProps {}

export interface AvatarGroupProps
  extends Omit<AvatarGroupRootProps, "children"> {
  max?: number;
  users: Array<{ src?: string; fallback?: string; name?: string }>;
}

export type AvatarGroupCountProps = ComponentProps<typeof ark.div>;

export const AvatarGroupRoot: Component<AvatarGroupRootProps> = withProvider(
  ark.div,
  { name: "Root", slot: "base" },
);

export const AvatarGroupCount: Component<AvatarGroupCountProps> = withContext(
  ark.div,
  { name: "Count" },
);

export function AvatarGroupShorthand(props: AvatarGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["max", "users"]);
  const visibleUsers = () =>
    local.max !== undefined ? local.users.slice(0, local.max) : local.users;
  const remainingCount = () =>
    local.max !== undefined && local.users.length > local.max
      ? local.users.length - local.max
      : 0;

  return (
    <AvatarGroupRoot {...rest}>
      <For each={visibleUsers()}>
        {(user) => (
          <Avatar
            alt={user.name ?? ""}
            fallback={user.fallback}
            src={user.src}
          />
        )}
      </For>
      <Show when={remainingCount() > 0}>
        <AvatarGroupCount>+{remainingCount()}</AvatarGroupCount>
      </Show>
    </AvatarGroupRoot>
  );
}
