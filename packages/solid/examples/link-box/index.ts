import articleRaw from "./article.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";

export const imports = `import { LinkBox } from "@pisagor/solid";`;

export const sources = {
  Article: articleRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
} as const;

export * from "./article";
export * from "./default";
export * from "./with-link";
