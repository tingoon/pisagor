import { AcceptedFileTypesSource as AcceptedFileTypes } from "./accepted-file-types";
import { ClearTriggerSource as ClearTrigger } from "./clear-trigger";
import { CustomPreviewSource as CustomPreview } from "./custom-preview";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { DirectoryUploadSource as DirectoryUpload } from "./directory-upload";
import { DisabledSource as Disabled } from "./disabled";
import { DropzoneSource as Dropzone } from "./dropzone";
import { InvalidSource as Invalid } from "./invalid";
import { MediaCaptureSource as MediaCapture } from "./media-capture";
import { MultipleFilesSource as MultipleFiles } from "./multiple-files";
import { RejectedFilesSource as RejectedFiles } from "./rejected-files";
import { TriggerSource as Trigger } from "./trigger";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { FileUpload } from "@pisagor/react";`;

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
