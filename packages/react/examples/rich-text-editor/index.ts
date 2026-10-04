import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { RichTextEditor } from "@pisagor/react/rich-text-editor";`;

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
