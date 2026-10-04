import { stripTsxExample } from "@pisagor/utils";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { RichTextEditorField } from "@pisagor/solid-form";`;

export const sources = {
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
} as const;

export * from "./disabled";
export * from "./invalid";
