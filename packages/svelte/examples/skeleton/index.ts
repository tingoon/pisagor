import defaultRaw from "./default.svelte?raw";
import in_cardRaw from "./in-card.svelte?raw";
import skeleton_textRaw from "./skeleton-text.svelte?raw";

export const imports = `import { Skeleton } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  InCard: in_cardRaw,
  SkeletonText: skeleton_textRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as InCard } from "./in-card.svelte";
export { default as SkeletonText } from "./skeleton-text.svelte";
