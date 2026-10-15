import AvatarShorthand from "./avatar.svelte";
import AvatarFallback from "./avatar-fallback.svelte";
import AvatarGroupShorthand from "./avatar-group.svelte";
import AvatarGroupCount from "./avatar-group-count.svelte";
import AvatarGroupRoot from "./avatar-group-root.svelte";
import AvatarImage from "./avatar-image.svelte";
import AvatarRoot from "./avatar-root.svelte";

export type {
  AvatarFallbackProps,
  AvatarImageProps,
} from "@ark-ui/svelte/avatar";

export const AvatarGroup = Object.assign(AvatarGroupShorthand, {
  Count: AvatarGroupCount,
  Root: AvatarGroupRoot,
});

export const Avatar = Object.assign(AvatarShorthand, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
});
