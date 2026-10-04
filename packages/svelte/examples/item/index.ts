import { stripSvelteExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import groupRaw from "./group.svelte?raw";
import headerRaw from "./header.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import imageRaw from "./image.svelte?raw";
import linkRaw from "./link.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_avatarRaw from "./with-avatar.svelte?raw";
import with_mediaRaw from "./with-media.svelte?raw";

export const imports = `import { Item } from "@pisagor/svelte";`;

export const sources = {
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
  Group: stripSvelteExample(groupRaw),
  Header: stripSvelteExample(headerRaw),
  Icon: stripSvelteExample(iconRaw),
  Image: stripSvelteExample(imageRaw),
  Link: stripSvelteExample(linkRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithAvatar: stripSvelteExample(with_avatarRaw),
  WithMedia: stripSvelteExample(with_mediaRaw),
} as const;

export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Group } from "./group.svelte";
export { default as Header } from "./header.svelte";
export { default as Icon } from "./icon.svelte";
export { default as Image } from "./image.svelte";
export { default as Link } from "./link.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithAvatar } from "./with-avatar.svelte";
export { default as WithMedia } from "./with-media.svelte";
