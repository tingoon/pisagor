import articleRaw from "./article.vue?raw";
import defaultRaw from "./default.vue?raw";
import with_linkRaw from "./with-link.vue?raw";

export const imports = `import { LinkBox } from "@pisagor/vue";`;

export const sources = {
  Article: articleRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
} as const;

export { default as Article } from "./article.vue";
export { default as Default } from "./default.vue";
export { default as WithLink } from "./with-link.vue";
