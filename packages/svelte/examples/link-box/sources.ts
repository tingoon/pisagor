import Article from "./article.svelte?raw";
import Default from "./default.svelte?raw";
import WithLink from "./with-link.svelte?raw";

export const imports = `import { LinkBox } from "@pisagor/svelte";`;

export const sources = {
  Article,
  Default,
  WithLink,
} as const;
