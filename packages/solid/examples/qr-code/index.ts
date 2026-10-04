import defaultRaw from "./default.tsx?raw";
import downloadRaw from "./download.tsx?raw";
import error_correctionRaw from "./error-correction.tsx?raw";
import overlayRaw from "./overlay.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { QrCode } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  Download: downloadRaw,
  ErrorCorrection: error_correctionRaw,
  Overlay: overlayRaw,
  Sizes: sizesRaw,
} as const;

export * from "./default";
export * from "./download";
export * from "./error-correction";
export * from "./overlay";
export * from "./sizes";
