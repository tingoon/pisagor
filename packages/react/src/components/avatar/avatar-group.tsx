import { ark } from "@ark-ui/react/factory";
import { avatarGroupCountVariants, avatarGroupVariants } from "@pisagor/styles/ui/avatar";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Avatar } from "./avatar";

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
  return (
    <ark.div
      {...rest}
      className={cn(avatarGroupVariants(), className)}
      data-part="group"
      data-scope="avatar"
      data-testid={testId}
    >
      {children}
    </ark.div>
  );
}
AvatarGroupRoot.displayName = "AvatarGroup.Root";

export function AvatarGroupCount({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(avatarGroupCountVariants(), className)}
      data-part="group-count"
      data-scope="avatar"
    />
  );
}
AvatarGroupCount.displayName = "AvatarGroup.Count";
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
AvatarGroupShorthand.displayName = "AvatarGroup";
// #endregion
