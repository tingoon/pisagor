import { stripTsxExample } from "@pisagor/utils";
import articleRaw from "./article.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";

export const imports = `import { LinkBox } from "@pisagor/react";`;

export const sources = {
  Article: stripTsxExample(articleRaw),
  Default: stripTsxExample(defaultRaw),
  WithLink: stripTsxExample(with_linkRaw),
} as const;

export * from "./article";
export * from "./default";
export * from "./with-link";
