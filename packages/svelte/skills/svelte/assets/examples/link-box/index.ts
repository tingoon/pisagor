import { stripSvelteExample } from "@pisagor/utils";
import articleRaw from "./article.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";

export const imports = `import { LinkBox } from "@pisagor/svelte/link-box";`;

export const sources = {
  Article: stripSvelteExample(articleRaw),
  Default: stripSvelteExample(defaultRaw),
  WithLink: stripSvelteExample(with_linkRaw),
} as const;

export { default as Article } from "./article.svelte";
export { default as Default } from "./default.svelte";
export { default as WithLink } from "./with-link.svelte";
