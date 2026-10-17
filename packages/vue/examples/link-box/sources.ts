import Article from "./article.vue?raw";
import Default from "./default.vue?raw";
import WithLink from "./with-link.vue?raw";

export const imports = `import { LinkBox } from "@pisagor/vue";`;

export const sources = {
  Article,
  Default,
  WithLink,
} as const;
