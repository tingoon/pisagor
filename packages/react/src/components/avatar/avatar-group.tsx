import { ark } from "@ark-ui/react/factory";
import type { AvatarGroupProps as BaseAvatarGroupRootProps } from "@pisagor/props";
import { avatarGroupRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import { Avatar } from "./avatar";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "AvatarGroup",
  recipe: avatarGroupRecipe,
});
// #endregion

// #region Parts
export const AvatarGroupRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  ComponentProps<typeof ark.div> & BaseAvatarGroupRootProps
>;

export const AvatarGroupCount = withContext(ark.div, {
  name: "Count",
});
// #endregion

// #region Types
export type AvatarGroupRootProps = ComponentProps<typeof AvatarGroupRoot>;
export type AvatarGroupCountProps = ComponentProps<typeof AvatarGroupCount>;

export interface AvatarGroupProps
  extends Omit<ComponentProps<typeof AvatarGroupRoot>, "children"> {
  /** Maximum number of avatars to show; excess shown as "+N". */
  max?: number;
  /** User list rendered as avatars. */
  users: Array<{ src?: string; fallback?: string; name?: string }>;
}
// #endregion

// #region Shorthand
export function AvatarGroupShorthand({
  max,
  users,
  ...rest
}: AvatarGroupProps) {
  const visibleUsers = max !== undefined ? users.slice(0, max) : users;
  const remainingCount =
    max !== undefined && users.length > max ? users.length - max : 0;

  return (
    <AvatarGroupRoot {...rest}>
      {visibleUsers.map((user) => (
        <Avatar
          alt={user.name ?? ""}
          fallback={user.fallback}
          key={user.src ?? user.fallback ?? user.name}
          src={user.src}
        />
      ))}
      {remainingCount > 0 ? (
        <AvatarGroupCount>+{remainingCount}</AvatarGroupCount>
      ) : null}
    </AvatarGroupRoot>
  );
}
// #endregion

// #region Display Names
AvatarGroupShorthand.displayName = "AvatarGroup";
// #endregion
