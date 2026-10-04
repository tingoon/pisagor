import {
  AvatarGroupCount,
  AvatarGroupRoot,
  AvatarGroupShorthand,
} from "./avatar-group";

export type {
  AvatarFallbackProps,
  AvatarImageProps,
} from "@ark-ui/solid/avatar";

export { Avatar, type AvatarProps } from "./avatar";
export type {
  AvatarGroupCountProps,
  AvatarGroupProps,
  AvatarGroupRootProps,
} from "./avatar-group";

export const AvatarGroup = Object.assign(AvatarGroupShorthand, {
  Count: AvatarGroupCount,
  Root: AvatarGroupRoot,
});
