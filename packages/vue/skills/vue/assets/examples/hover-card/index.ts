import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.ts?raw";
import disabledRaw from "./disabled.vue?raw";
import placementsRaw from "./placements.vue?raw";
import triggers_delaysRaw from "./triggers-delays.vue?raw";

export const imports = `import { HoverCard } from "@pisagor/vue/hover-card";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Placements: stripVueExample(placementsRaw),
  TriggersDelays: stripVueExample(triggers_delaysRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default";
export { default as Disabled } from "./disabled.vue";
export { default as Placements } from "./placements.vue";
export { default as TriggersDelays } from "./triggers-delays.vue";
