import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { RichTextEditor } from "@pisagor/solid/rich-text-editor";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
