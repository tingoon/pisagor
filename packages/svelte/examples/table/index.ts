import actionsRaw from "./actions.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import footerRaw from "./footer.svelte?raw";
import not_hoverableRaw from "./not-hoverable.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Table } from "@pisagor/svelte";`;

export const sources = {
  Actions: actionsRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;

export { default as Actions } from "./actions.svelte";
export { default as Default } from "./default.svelte";
export { default as Footer } from "./footer.svelte";
export { default as NotHoverable } from "./not-hoverable.svelte";
export { default as Variants } from "./variants.svelte";
