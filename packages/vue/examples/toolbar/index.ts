import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.ts?raw";
import wrapped_actionsRaw from "./wrapped-actions.ts?raw";

export const imports = `import { Toolbar } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  WrappedActions: wrapped_actionsRaw,
} as const;

export { default as Compound } from "./compound.vue";
export { default as Default } from "./default";
export { default as WrappedActions } from "./wrapped-actions";
