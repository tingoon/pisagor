import {
  FileUploadClearTrigger,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadHelper,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSize,
  FileUploadList,
  FileUploadRoot,
  FileUploadTitle,
  FileUploadTrigger,
} from "./file-upload";

export type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadTriggerProps,
} from "@ark-ui/react/file-upload";

export type {
  FileUploadDescriptionProps,
  FileUploadDropzoneIconProps,
  FileUploadDropzoneProps,
  FileUploadHelperProps,
  FileUploadItemDeleteTriggerProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemSizeProps,
  FileUploadListProps,
  FileUploadRootProps,
  FileUploadTitleProps,
} from "./file-upload";

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
