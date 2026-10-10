import articleRaw from "./article.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";

export const imports = `import { LinkBox } from "@pisagor/svelte";`;

export const sources = {
  Article: articleRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
} as const;
