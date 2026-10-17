import AcceptedFileTypes from "./accepted-file-types.svelte?raw";
import ClearTrigger from "./clear-trigger.svelte?raw";
import CustomPreview from "./custom-preview.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import DirectoryUpload from "./directory-upload.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Dropzone from "./dropzone.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import MediaCapture from "./media-capture.svelte?raw";
import MultipleFiles from "./multiple-files.svelte?raw";
import RejectedFiles from "./rejected-files.svelte?raw";
import Trigger from "./trigger.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { FileUpload } from "@pisagor/svelte";`;

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
