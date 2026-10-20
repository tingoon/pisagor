import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte";
import FileUploadShorthand from "./file-upload.svelte";
import ClearTrigger from "./file-upload-clear-trigger.svelte";
import Dropzone from "./file-upload-dropzone.svelte";
import Item from "./file-upload-item.svelte";
import ItemDeleteTrigger from "./file-upload-item-delete-trigger.svelte";
import ItemGroup from "./file-upload-item-group.svelte";
import ItemName from "./file-upload-item-name.svelte";
import ItemPreview from "./file-upload-item-preview.svelte";
import ItemPreviewImage from "./file-upload-item-preview-image.svelte";
import ItemSizeText from "./file-upload-item-size-text.svelte";
import Label from "./file-upload-label.svelte";
import Root from "./file-upload-root.svelte";
import Trigger from "./file-upload-trigger.svelte";

export type {
  FileUploadClearTriggerProps,
  FileUploadDropzoneProps,
  FileUploadItemDeleteTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemPreviewProps,
  FileUploadItemSizeTextProps,
  FileUploadLabelProps,
  FileUploadTriggerProps,
} from "@ark-ui/svelte";

export const FileUpload = Object.assign(FileUploadShorthand, {
  ClearTrigger,
  Context: FileUploadPrimitive.Context,
  Dropzone,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  Label,
  Root,
  Trigger,
});
