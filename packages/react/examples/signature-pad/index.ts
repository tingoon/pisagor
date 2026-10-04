import controlledRaw from "./controlled.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import image_previewRaw from "./image-preview.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { SignaturePad } from "@pisagor/react";`;

export const sources = {
  Controlled: controlledRaw,
  Disabled: disabledRaw,
  ImagePreview: image_previewRaw,
  Invalid: invalidRaw,
} as const;

export * from "./controlled";
export * from "./disabled";
export * from "./image-preview";
export * from "./invalid";
