import defaultRaw from "./default.vue?raw";
import downloadRaw from "./download.vue?raw";
import error_correctionRaw from "./error-correction.vue?raw";
import overlayRaw from "./overlay.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { QrCode } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Download: downloadRaw,
  ErrorCorrection: error_correctionRaw,
  Overlay: overlayRaw,
  Sizes: sizesRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as Download } from "./download.vue";
export { default as ErrorCorrection } from "./error-correction.vue";
export { default as Overlay } from "./overlay.vue";
export { default as Sizes } from "./sizes.vue";
