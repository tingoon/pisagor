import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import image_previewRaw from "./image-preview.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { SignaturePad } from "@pisagor/react/signature-pad";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Disabled: stripTsxExample(disabledRaw),
  ImagePreview: stripTsxExample(image_previewRaw),
  Invalid: stripTsxExample(invalidRaw),
} as const;

export { Controlled } from "./controlled";
export { Disabled } from "./disabled";
export { ImagePreview } from "./image-preview";
export { Invalid } from "./invalid";
