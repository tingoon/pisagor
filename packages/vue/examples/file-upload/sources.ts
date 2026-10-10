import accepted_file_typesRaw from "./accepted-file-types.vue?raw";
import clear_triggerRaw from "./clear-trigger.vue?raw";
import custom_previewRaw from "./custom-preview.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import directory_uploadRaw from "./directory-upload.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import dropzoneRaw from "./dropzone.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import media_captureRaw from "./media-capture.vue?raw";
import multiple_filesRaw from "./multiple-files.vue?raw";
import triggerRaw from "./trigger.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { FileUpload } from "@pisagor/vue";`;

export const sources = {
  AcceptedFileTypes: accepted_file_typesRaw,
  ClearTrigger: clear_triggerRaw,
  CustomPreview: custom_previewRaw,
  CustomRecipe: custom_recipeRaw,
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
