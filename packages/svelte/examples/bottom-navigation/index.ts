import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import icon_onlyRaw from "./icon-only.svelte?raw";
import with_linksRaw from "./with-links.svelte?raw";

export const imports = `import { BottomNavigation } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  IconOnly: stripSvelteExample(icon_onlyRaw),
  WithLinks: stripSvelteExample(with_linksRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as IconOnly } from "./icon-only.svelte";
export { default as WithLinks } from "./with-links.svelte";
