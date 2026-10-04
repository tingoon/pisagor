import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import downloadRaw from "./download.svelte?raw";
import error_correctionRaw from "./error-correction.svelte?raw";
import overlayRaw from "./overlay.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { QrCode } from "@pisagor/svelte/qr-code";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Download: stripSvelteExample(downloadRaw),
  ErrorCorrection: stripSvelteExample(error_correctionRaw),
  Overlay: stripSvelteExample(overlayRaw),
  Sizes: stripSvelteExample(sizesRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Download } from "./download.svelte";
export { default as ErrorCorrection } from "./error-correction.svelte";
export { default as Overlay } from "./overlay.svelte";
export { default as Sizes } from "./sizes.svelte";
