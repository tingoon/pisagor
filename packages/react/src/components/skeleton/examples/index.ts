import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import in_cardRaw from "./in-card.tsx?raw";
import skeleton_textRaw from "./skeleton-text.tsx?raw";

export const imports = `import { Skeleton } from "@pisagor/react/skeleton";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  InCard: stripTsxExample(in_cardRaw),
  SkeletonText: stripTsxExample(skeleton_textRaw),
} as const;

export { Default } from "./default";
export { InCard } from "./in-card";
export { SkeletonText } from "./skeleton-text";
