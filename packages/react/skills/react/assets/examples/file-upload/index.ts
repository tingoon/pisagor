import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { FileUpload } from "@pisagor/react/file-upload";`;

export const sources = {
  AcceptedFileTypes: stripTsxExample(accepted_file_typesRaw),
  ClearTrigger: stripTsxExample(clear_triggerRaw),
  CustomPreview: stripTsxExample(custom_previewRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  DirectoryUpload: stripTsxExample(directory_uploadRaw),
  Disabled: stripTsxExample(disabledRaw),
  Dropzone: stripTsxExample(dropzoneRaw),
  Invalid: stripTsxExample(invalidRaw),
  MediaCapture: stripTsxExample(media_captureRaw),
  MultipleFiles: stripTsxExample(multiple_filesRaw),
  Trigger: stripTsxExample(triggerRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { AcceptedFileTypes } from "./accepted-file-types";
export { ClearTrigger } from "./clear-trigger";
export { CustomPreview } from "./custom-preview";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { DirectoryUpload } from "./directory-upload";
export { Disabled } from "./disabled";
export { Dropzone } from "./dropzone";
export { Invalid } from "./invalid";
export { MediaCapture } from "./media-capture";
export { MultipleFiles } from "./multiple-files";
export { Trigger } from "./trigger";
export { Variants } from "./variants";
