import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import descriptionRaw from "./description.vue?raw";
import iconRaw from "./icon.vue?raw";
import loadingRaw from "./loading.vue?raw";
import titleRaw from "./title.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { Steps } from "@pisagor/vue/steps";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Description: stripVueExample(descriptionRaw),
  Icon: stripVueExample(iconRaw),
  Loading: stripVueExample(loadingRaw),
  Title: stripVueExample(titleRaw),
  Vertical: stripVueExample(verticalRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Description } from "./description.vue";
export { default as Icon } from "./icon.vue";
export { default as Loading } from "./loading.vue";
export { default as Title } from "./title.vue";
export { default as Vertical } from "./vertical.vue";
