import { stripSvelteExample } from "@pisagor/utils";
import acceptRaw from "./accept.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import on_files_changeRaw from "./on-files-change.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { FileInput } from "@pisagor/svelte/file-input";`;

export const sources = {
  Accept: stripSvelteExample(acceptRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Invalid: stripSvelteExample(invalidRaw),
  Multiple: stripSvelteExample(multipleRaw),
  OnFilesChange: stripSvelteExample(on_files_changeRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Accept } from "./accept.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Multiple } from "./multiple.svelte";
export { default as OnFilesChange } from "./on-files-change.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
