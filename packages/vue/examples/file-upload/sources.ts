import AcceptedFileTypes from "./accepted-file-types.vue?raw";
import ClearTrigger from "./clear-trigger.vue?raw";
import CustomPreview from "./custom-preview.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.vue?raw";
import Default from "./default.vue?raw";
import DirectoryUpload from "./directory-upload.vue?raw";
import Disabled from "./disabled.vue?raw";
import Dropzone from "./dropzone.vue?raw";
import Invalid from "./invalid.vue?raw";
import MediaCapture from "./media-capture.vue?raw";
import MultipleFiles from "./multiple-files.vue?raw";
import RejectedFiles from "./rejected-files.vue?raw";
import Trigger from "./trigger.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { FileUpload } from "@pisagor/vue";`;

export const sources = {
  AcceptedFileTypes,
  ClearTrigger,
  CustomPreview,
  CustomRecipe,
  CustomSpacing,
  Default,
  DirectoryUpload,
  Disabled,
  Dropzone,
  Invalid,
  MediaCapture,
  MultipleFiles,
  RejectedFiles,
  Trigger,
  Variants,
} as const;
