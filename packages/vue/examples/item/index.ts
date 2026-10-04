import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import groupRaw from "./group.vue?raw";
import headerRaw from "./header.vue?raw";
import iconRaw from "./icon.vue?raw";
import imageRaw from "./image.vue?raw";
import linkRaw from "./link.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_avatarRaw from "./with-avatar.vue?raw";
import with_mediaRaw from "./with-media.vue?raw";

export const imports = `import { Item } from "@pisagor/vue";`;

export const sources = {
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Group: groupRaw,
  Header: headerRaw,
  Icon: iconRaw,
  Image: imageRaw,
  Link: linkRaw,
  Variants: variantsRaw,
  WithAvatar: with_avatarRaw,
  WithMedia: with_mediaRaw,
} as const;

export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
export { default as Group } from "./group.vue";
export { default as Header } from "./header.vue";
export { default as Icon } from "./icon.vue";
export { default as Image } from "./image.vue";
export { default as Link } from "./link.vue";
export { default as Variants } from "./variants.vue";
export { default as WithAvatar } from "./with-avatar.vue";
export { default as WithMedia } from "./with-media.vue";
