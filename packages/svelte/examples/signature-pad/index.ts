import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import image_previewRaw from "./image-preview.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";

export const imports = `import { SignaturePad } from "@pisagor/svelte/signature-pad";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  ImagePreview: stripSvelteExample(image_previewRaw),
  Invalid: stripSvelteExample(invalidRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as ImagePreview } from "./image-preview.svelte";
export { default as Invalid } from "./invalid.svelte";
