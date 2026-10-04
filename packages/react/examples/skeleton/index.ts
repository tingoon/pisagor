import defaultRaw from "./default.tsx?raw";
import in_cardRaw from "./in-card.tsx?raw";
import skeleton_textRaw from "./skeleton-text.tsx?raw";

export const imports = `import { Skeleton } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  InCard: in_cardRaw,
  SkeletonText: skeleton_textRaw,
} as const;

export * from "./default";
export * from "./in-card";
export * from "./skeleton-text";
