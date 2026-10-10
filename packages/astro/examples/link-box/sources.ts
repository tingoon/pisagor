import articleRaw from "./article.astro?raw";
import defaultRaw from "./default.astro?raw";
import with_linkRaw from "./with-link.astro?raw";

export const imports = `---
import { LinkBox } from "@pisagor/astro";
---`;

export const sources = {
  Article: articleRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
} as const;
