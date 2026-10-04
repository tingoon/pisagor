import compoundRaw from "./compound.ts?raw";
import controlledRaw from "./controlled.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import invalidRaw from "./invalid.ts?raw";

export const imports = `import { RichTextEditor } from "@pisagor/vue/rich-text-editor";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
} as const;

export * from "./compound";
export * from "./controlled";
export * from "./disabled";
export * from "./invalid";
