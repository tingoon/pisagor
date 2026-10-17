import Article from "./article.astro?raw";
import Default from "./default.astro?raw";
import WithLink from "./with-link.astro?raw";

export const imports = `---
import { LinkBox } from "@pisagor/astro";
---`;

export const sources = {
  Article,
  Default,
  WithLink,
} as const;
