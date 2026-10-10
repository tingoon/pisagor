import AvatarGroupShorthand from "./avatar-group.svelte";
import AvatarGroupCount from "./avatar-group-count.svelte";
import AvatarGroupRoot from "./avatar-group-root.svelte";

export type {
  AvatarFallbackProps,
  AvatarImageProps,
} from "@ark-ui/svelte/avatar";
export { default as Avatar } from "./avatar.svelte";

export const AvatarGroup = Object.assign(AvatarGroupShorthand, {
  Count: AvatarGroupCount,
  Root: AvatarGroupRoot,
});
