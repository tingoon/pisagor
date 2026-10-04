import accepted_file_typesRaw from "./accepted-file-types.svelte?raw";
import clear_triggerRaw from "./clear-trigger.svelte?raw";
import custom_previewRaw from "./custom-preview.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import directory_uploadRaw from "./directory-upload.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import dropzoneRaw from "./dropzone.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import media_captureRaw from "./media-capture.svelte?raw";
import multiple_filesRaw from "./multiple-files.svelte?raw";
import triggerRaw from "./trigger.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { FileUpload } from "@pisagor/svelte";`;

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

export { default as AcceptedFileTypes } from "./accepted-file-types.svelte";
export { default as ClearTrigger } from "./clear-trigger.svelte";
export { default as CustomPreview } from "./custom-preview.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as DirectoryUpload } from "./directory-upload.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Dropzone } from "./dropzone.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as MediaCapture } from "./media-capture.svelte";
export { default as MultipleFiles } from "./multiple-files.svelte";
export { default as Trigger } from "./trigger.svelte";
export { default as Variants } from "./variants.svelte";
