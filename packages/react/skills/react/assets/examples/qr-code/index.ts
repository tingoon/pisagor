import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import downloadRaw from "./download.tsx?raw";
import error_correctionRaw from "./error-correction.tsx?raw";
import overlayRaw from "./overlay.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { QrCode } from "@pisagor/react/qr-code";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Download: stripTsxExample(downloadRaw),
  ErrorCorrection: stripTsxExample(error_correctionRaw),
  Overlay: stripTsxExample(overlayRaw),
  Sizes: stripTsxExample(sizesRaw),
} as const;

export { Default } from "./default";
export { Download } from "./download";
export { ErrorCorrection } from "./error-correction";
export { Overlay } from "./overlay";
export { Sizes } from "./sizes";
