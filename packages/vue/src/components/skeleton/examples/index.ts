import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import in_cardRaw from "./in-card.vue?raw";
import skeleton_text_storyRaw from "./skeleton-text-story.vue?raw";

export const imports = `import { Skeleton } from "@pisagor/vue/skeleton";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  InCard: stripVueExample(in_cardRaw),
  SkeletonTextStory: stripVueExample(skeleton_text_storyRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as InCard } from "./in-card.vue";
export { default as SkeletonTextStory } from "./skeleton-text-story.vue";
