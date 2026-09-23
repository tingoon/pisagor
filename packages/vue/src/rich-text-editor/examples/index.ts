import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.ts?raw";
import controlledRaw from "./controlled.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import invalidRaw from "./invalid.ts?raw";

export const imports = `import { RichTextEditor } from "@pisagor/vue/rich-text-editor";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
