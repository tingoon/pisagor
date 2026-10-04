import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import nestedRaw from "./nested.vue?raw";
import partial_collapseRaw from "./partial-collapse.vue?raw";

export const imports = `import { Collapsible } from "@pisagor/vue/collapsible";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Nested: stripVueExample(nestedRaw),
  PartialCollapse: stripVueExample(partial_collapseRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Nested } from "./nested.vue";
export { default as PartialCollapse } from "./partial-collapse.vue";
