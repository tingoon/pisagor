import { stripTsxExample } from "@pisagor/utils";
import acceptRaw from "./accept.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import on_files_changeRaw from "./on-files-change.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { FileInput } from "@pisagor/solid";`;

export const sources = {
  Accept: stripTsxExample(acceptRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Multiple: stripTsxExample(multipleRaw),
  OnFilesChange: stripTsxExample(on_files_changeRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export * from "./accept";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./multiple";
export * from "./on-files-change";
export * from "./sizes";
export * from "./variants";
