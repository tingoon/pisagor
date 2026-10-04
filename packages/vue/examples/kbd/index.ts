import defaultRaw from "./default.vue?raw";
import kbd_group_storyRaw from "./kbd-group-story.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_buttonRaw from "./with-button.vue?raw";
import with_tooltipRaw from "./with-tooltip.ts?raw";

export const imports = `import { Kbd } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  KbdGroupStory: kbd_group_storyRaw,
  Variants: variantsRaw,
  WithButton: with_buttonRaw,
  WithTooltip: with_tooltipRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as KbdGroupStory } from "./kbd-group-story.vue";
export { default as Variants } from "./variants.vue";
export { default as WithButton } from "./with-button.vue";
export { default as WithTooltip } from "./with-tooltip";
