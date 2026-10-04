import accepted_file_typesRaw from "./accepted-file-types.tsx?raw";
import clear_triggerRaw from "./clear-trigger.tsx?raw";
import custom_previewRaw from "./custom-preview.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import directory_uploadRaw from "./directory-upload.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import dropzoneRaw from "./dropzone.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import media_captureRaw from "./media-capture.tsx?raw";
import multiple_filesRaw from "./multiple-files.tsx?raw";
import triggerRaw from "./trigger.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { FileUpload } from "@pisagor/react";`;

export const sources = {
  AcceptedFileTypes: accepted_file_typesRaw,
  ClearTrigger: clear_triggerRaw,
  CustomPreview: custom_previewRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  DirectoryUpload: directory_uploadRaw,
  Disabled: disabledRaw,
  Dropzone: dropzoneRaw,
  Invalid: invalidRaw,
  MediaCapture: media_captureRaw,
  MultipleFiles: multiple_filesRaw,
  Trigger: triggerRaw,
  Variants: variantsRaw,
} as const;

export * from "./accepted-file-types";
export * from "./clear-trigger";
export * from "./custom-preview";
export * from "./custom-spacing";
export * from "./default";
export * from "./directory-upload";
export * from "./disabled";
export * from "./dropzone";
export * from "./invalid";
export * from "./media-capture";
export * from "./multiple-files";
export * from "./trigger";
export * from "./variants";
