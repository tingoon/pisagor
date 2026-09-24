import FileUploadClearTrigger from "./file-upload-clear-trigger.svelte";
import FileUploadDescription from "./file-upload-description.svelte";
import FileUploadDropzone from "./file-upload-dropzone.svelte";
import FileUploadDropzoneIcon from "./file-upload-dropzone-icon.svelte";
import FileUploadHelper from "./file-upload-helper.svelte";
import FileUploadItem from "./file-upload-item.svelte";
import FileUploadItemDeleteTrigger from "./file-upload-item-delete-trigger.svelte";
import FileUploadItemGroup from "./file-upload-item-group.svelte";
import FileUploadItemName from "./file-upload-item-name.svelte";
import FileUploadItemPreview from "./file-upload-item-preview.svelte";
import FileUploadItemPreviewImage from "./file-upload-item-preview-image.svelte";
import FileUploadItemSize from "./file-upload-item-size.svelte";
import FileUploadList from "./file-upload-list.svelte";
import FileUploadRoot from "./file-upload-root.svelte";
import FileUploadTitle from "./file-upload-title.svelte";
import FileUploadTrigger from "./file-upload-trigger.svelte";

export const FileUpload = Object.assign(FileUploadRoot, {
  ClearTrigger: FileUploadClearTrigger,
  Description: FileUploadDescription,
  Dropzone: FileUploadDropzone,
  DropzoneIcon: FileUploadDropzoneIcon,
  Helper: FileUploadHelper,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemSize: FileUploadItemSize,
  List: FileUploadList,
  Title: FileUploadTitle,
  Trigger: FileUploadTrigger,
});
