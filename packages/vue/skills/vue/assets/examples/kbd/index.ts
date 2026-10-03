import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import kbd_group_storyRaw from "./kbd-group-story.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_buttonRaw from "./with-button.vue?raw";
import with_tooltipRaw from "./with-tooltip.ts?raw";

export const imports = `import { Kbd } from "@pisagor/vue/kbd";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  KbdGroupStory: stripVueExample(kbd_group_storyRaw),
  Variants: stripVueExample(variantsRaw),
  WithButton: stripVueExample(with_buttonRaw),
  WithTooltip: stripVueExample(with_tooltipRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as KbdGroupStory } from "./kbd-group-story.vue";
export { default as Variants } from "./variants.vue";
export { default as WithButton } from "./with-button.vue";
export { default as WithTooltip } from "./with-tooltip";
