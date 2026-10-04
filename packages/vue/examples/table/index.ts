import actionsRaw from "./actions.vue?raw";
import defaultRaw from "./default.vue?raw";
import footerRaw from "./footer.vue?raw";
import not_hoverableRaw from "./not-hoverable.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Table } from "@pisagor/vue";`;

export const sources = {
  Actions: actionsRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;

export { default as Actions } from "./actions.vue";
export { default as Default } from "./default.vue";
export { default as Footer } from "./footer.vue";
export { default as NotHoverable } from "./not-hoverable.vue";
export { default as Variants } from "./variants.vue";
