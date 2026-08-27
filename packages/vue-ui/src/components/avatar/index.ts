import { AvatarGroupCount, AvatarGroupRoot, AvatarGroupShorthand } from "./avatar-group";

export type { AvatarClassNames, AvatarProps, AvatarShape, AvatarSize } from "./avatar";
export { Avatar } from "./avatar";
export type { AvatarGroupProps, AvatarGroupUser } from "./avatar-group";
export { AvatarGroupCount, AvatarGroupRoot, AvatarGroupShorthand } from "./avatar-group";

export const AvatarGroup = Object.assign(AvatarGroupShorthand, {
  Count: AvatarGroupCount,
  Root: AvatarGroupRoot,
});
