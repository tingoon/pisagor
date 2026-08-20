import { AvatarGroupCount, AvatarGroupRoot, AvatarGroupShorthand } from "./avatar-group";

export type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
  AvatarRootProps,
} from "./avatar";
export { Avatar } from "./avatar";
export type { AvatarGroupProps, AvatarGroupRootProps } from "./avatar-group";

export const AvatarGroup = Object.assign(AvatarGroupShorthand, {
  Count: AvatarGroupCount,
  Root: AvatarGroupRoot,
});
