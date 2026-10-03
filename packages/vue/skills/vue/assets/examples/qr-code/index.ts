import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import downloadRaw from "./download.vue?raw";
import error_correctionRaw from "./error-correction.vue?raw";
import overlayRaw from "./overlay.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { QrCode } from "@pisagor/vue/qr-code";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Download: stripVueExample(downloadRaw),
  ErrorCorrection: stripVueExample(error_correctionRaw),
  Overlay: stripVueExample(overlayRaw),
  Sizes: stripVueExample(sizesRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Download } from "./download.vue";
export { default as ErrorCorrection } from "./error-correction.vue";
export { default as Overlay } from "./overlay.vue";
export { default as Sizes } from "./sizes.vue";
