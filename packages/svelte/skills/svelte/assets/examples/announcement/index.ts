import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";
import without_badgeRaw from "./without-badge.svelte?raw";

export const imports = `import { Announcement } from "@pisagor/svelte/announcement";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithIcon: stripSvelteExample(with_iconRaw),
  WithLink: stripSvelteExample(with_linkRaw),
  WithoutBadge: stripSvelteExample(without_badgeRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithIcon } from "./with-icon.svelte";
export { default as WithLink } from "./with-link.svelte";
export { default as WithoutBadge } from "./without-badge.svelte";
