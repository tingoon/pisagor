import { stripVueExample } from "@pisagor/utils";
import accepted_file_typesRaw from "./accepted-file-types.vue?raw";
import clear_triggerRaw from "./clear-trigger.vue?raw";
import custom_previewRaw from "./custom-preview.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import directory_uploadRaw from "./directory-upload.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import dropzoneRaw from "./dropzone.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import media_captureRaw from "./media-capture.vue?raw";
import multiple_filesRaw from "./multiple-files.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import triggerRaw from "./trigger.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { FileUpload } from "@pisagor/vue/file-upload";`;

export const sources = {
  AcceptedFileTypes: stripVueExample(accepted_file_typesRaw),
  ClearTrigger: stripVueExample(clear_triggerRaw),
  CustomPreview: stripVueExample(custom_previewRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  DirectoryUpload: stripVueExample(directory_uploadRaw),
  Disabled: stripVueExample(disabledRaw),
  Dropzone: stripVueExample(dropzoneRaw),
  Invalid: stripVueExample(invalidRaw),
  MediaCapture: stripVueExample(media_captureRaw),
  MultipleFiles: stripVueExample(multiple_filesRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Trigger: stripVueExample(triggerRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as AcceptedFileTypes } from "./accepted-file-types.vue";
export { default as ClearTrigger } from "./clear-trigger.vue";
export { default as CustomPreview } from "./custom-preview.vue";
export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
export { default as DirectoryUpload } from "./directory-upload.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Dropzone } from "./dropzone.vue";
export { default as Invalid } from "./invalid.vue";
export { default as MediaCapture } from "./media-capture.vue";
export { default as MultipleFiles } from "./multiple-files.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Trigger } from "./trigger.vue";
export { default as Variants } from "./variants.vue";
