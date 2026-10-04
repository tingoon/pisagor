import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import image_previewRaw from "./image-preview.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { SignaturePad } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  ImagePreview: image_previewRaw,
  Invalid: invalidRaw,
} as const;

export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./image-preview";
export * from "./invalid";
