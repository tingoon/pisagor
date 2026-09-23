import { stripVueExample } from "@pisagor/utils";
import actionsRaw from "./actions.vue?raw";
import defaultRaw from "./default.vue?raw";
import footerRaw from "./footer.vue?raw";
import not_hoverableRaw from "./not-hoverable.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Table } from "@pisagor/vue/table";`;

export const sources = {
  Actions: stripVueExample(actionsRaw),
  Default: stripVueExample(defaultRaw),
  Footer: stripVueExample(footerRaw),
  NotHoverable: stripVueExample(not_hoverableRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as Actions } from "./actions.vue";
export { default as Default } from "./default.vue";
export { default as Footer } from "./footer.vue";
export { default as NotHoverable } from "./not-hoverable.vue";
export { default as Variants } from "./variants.vue";
