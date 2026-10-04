import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import non_collapsibleRaw from "./non-collapsible.vue?raw";
import with_cardRaw from "./with-card.vue?raw";

export const imports = `import { Accordion } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Multiple: multipleRaw,
  NonCollapsible: non_collapsibleRaw,
  WithCard: with_cardRaw,
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Multiple } from "./multiple.vue";
export { default as NonCollapsible } from "./non-collapsible.vue";
export { default as WithCard } from "./with-card.vue";
