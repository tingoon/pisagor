import acceptRaw from "./accept.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import on_files_changeRaw from "./on-files-change.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { FileInput } from "@pisagor/svelte";`;

export const sources = {
  Accept: acceptRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  OnFilesChange: on_files_changeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export { default as Accept } from "./accept.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Multiple } from "./multiple.svelte";
export { default as OnFilesChange } from "./on-files-change.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
