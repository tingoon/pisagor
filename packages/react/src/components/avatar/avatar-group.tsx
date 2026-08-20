import { ark } from "@ark-ui/react/factory";
import { avatarGroupVariants } from "@pisagor/styles/ui/avatar";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Avatar } from "./avatar";
import { AvatarGroupContext, useAvatarGroup } from "./avatar-group.context";

// #region Types
export interface AvatarGroupRootProps extends ComponentProps<typeof ark.div>, WithTestId {}

export interface AvatarGroupProps extends Omit<AvatarGroupRootProps, "children"> {
  /** User list rendered as avatars. */
  users: Array<{ src?: string; fallback?: string; name?: string }>;
  /** Maximum number of avatars to show; excess shown as "+N". */
  max?: number;
}
// #endregion

// #region Parts
export function AvatarGroupRoot({ className, children, testId, ...rest }: AvatarGroupRootProps) {
  const slots = avatarGroupVariants();

  return (
    <AvatarGroupContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="group"
        data-scope="avatar"
        data-testid={testId}
      >
        {children}
      </ark.div>
    </AvatarGroupContext>
  );
}

export function AvatarGroupCount({ className, ...rest }: ComponentProps<typeof ark.div>) {
  const { slots } = useAvatarGroup();

  return (
    <ark.div
      {...rest}
      className={slots.count({ className })}
      data-part="group-count"
      data-scope="avatar"
    />
  );
}
// #endregion

// #region Shorthand
export function AvatarGroupShorthand({ users, max, ...rest }: AvatarGroupProps) {
  const visibleUsers = max !== undefined ? users.slice(0, max) : users;
  const remainingCount = max !== undefined && users.length > max ? users.length - max : 0;

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
      {remainingCount > 0 ? <AvatarGroupCount>+{remainingCount}</AvatarGroupCount> : null}
    </AvatarGroupRoot>
  );
}
// #endregion

// #region Display Names
AvatarGroupRoot.displayName = "AvatarGroup.Root";
AvatarGroupCount.displayName = "AvatarGroup.Count";
AvatarGroupShorthand.displayName = "AvatarGroup";
// #endregion
