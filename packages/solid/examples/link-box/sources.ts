import { ArticleSource as Article } from "./article";
import { DefaultSource as Default } from "./default";
import { WithLinkSource as WithLink } from "./with-link";

export const imports = `import { LinkBox } from "@pisagor/solid";`;

export const sources = {
  Article,
  Default,
  WithLink,
} as const;
