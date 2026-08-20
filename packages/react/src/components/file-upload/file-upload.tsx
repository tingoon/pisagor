import { ark } from "@ark-ui/react/factory";
import {
  FileUpload as FileUploadPrimitive,
  useFileUploadContext as useFileUpload,
} from "@ark-ui/react/file-upload";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import {
  fileUploadDropzoneHelperVariants,
  fileUploadDropzoneIconVariants,
  fileUploadDropzoneVariants,
  fileUploadInline2Variants,
  fileUploadInline3Variants,
  fileUploadInline4Variants,
  fileUploadInline5Variants,
  fileUploadInline6Variants,
  fileUploadInline7Variants,
  fileUploadInlineVariants,
  fileUploadItemNameVariants,
  fileUploadItemPreviewImageVariants,
  fileUploadItemPreviewVariants,
  fileUploadItemSizeVariants,
  fileUploadItemVariants,
  fileUploadTitle2Variants,
  fileUploadTitleVariants,
  fileUploadVariants,
} from "@pisagor/styles/ui/file-upload";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlZoneVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";

// #region Types
export interface FileUploadListProps
  extends Omit<ComponentProps<typeof FileUploadPrimitive.Item>, "file"> {}

export interface FileUploadRootProps
  extends ComponentProps<typeof FileUploadPrimitive.Root>,
    WithTestId {
  onValueChange?: (value: File[]) => void;
}

export interface FileUploadDropzoneProps
  extends ComponentProps<typeof FileUploadPrimitive.Dropzone> {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}

export type FileUploadTriggerProps = ComponentProps<typeof FileUploadPrimitive.Trigger>;

export type FileUploadItemGroupProps = ComponentProps<typeof FileUploadPrimitive.ItemGroup>;

export type FileUploadItemProps = ComponentProps<typeof FileUploadPrimitive.Item>;

export type FileUploadItemPreviewProps = ComponentProps<typeof FileUploadPrimitive.ItemPreview>;

export type FileUploadItemPreviewImageProps = ComponentProps<
  typeof FileUploadPrimitive.ItemPreviewImage
>;

export type FileUploadItemNameProps = ComponentProps<typeof FileUploadPrimitive.ItemName>;

export type FileUploadItemSizeProps = ComponentProps<typeof FileUploadPrimitive.ItemSizeText>;

export type FileUploadItemDeleteTriggerProps = ComponentProps<
  typeof FileUploadPrimitive.ItemDeleteTrigger
>;

export type FileUploadClearTriggerProps = ComponentProps<typeof FileUploadPrimitive.ClearTrigger>;
// #endregion

// #region Parts
export function FileUploadRoot({
  className,
  children,
  onFileChange,
  onValueChange,
  testId,
  ...rest
}: FileUploadRootProps) {
  return (
    <FileUploadPrimitive.Root
      {...rest}
      className={fileUploadVariants({ className })}
      data-testid={testId}
      onFileChange={(details) => {
        onFileChange?.(details);
        onValueChange?.(details.acceptedFiles);
      }}
    >
      {children}

      <FileUploadPrimitive.HiddenInput />
    </FileUploadPrimitive.Root>
  );
}
FileUploadRoot.displayName = "FileUpload";

export function FileUploadTrigger(props: FileUploadTriggerProps) {
  return <FileUploadPrimitive.Trigger {...props} />;
}
FileUploadTrigger.displayName = "FileUpload.Trigger";

export function FileUploadDropzone({
  variant: variantProp,
  className,
  ...rest
}: FileUploadDropzoneProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return (
    <FileUploadPrimitive.Dropzone
      {...rest}
      {...controlProps}
      className={cn(
        formControlZoneVariants({ ...shellArgs }),
        fileUploadDropzoneVariants(),
        className,
      )}
    />
  );
}
FileUploadDropzone.displayName = "FileUpload.Dropzone";

export function FileUploadDropzoneIcon({
  className,
  children,
  ...rest
}: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fileUploadDropzoneIconVariants({ className })}
      data-part="dropzone-icon"
      data-scope="file-upload"
    >
      {children || <UploadIcon />}
    </ark.div>
  );
}
FileUploadDropzoneIcon.displayName = "FileUpload.DropzoneIcon";

export function FileUploadTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fileUploadTitleVariants({ className })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}
FileUploadTitle.displayName = "FileUpload.Title";

export function FileUploadDescription({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fileUploadTitle2Variants({ className })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}
FileUploadDescription.displayName = "FileUpload.Description";

export function FileUploadHelper({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={fileUploadDropzoneHelperVariants({ className })}
      data-part="dropzone-helper"
      data-scope="file-upload"
    />
  );
}
FileUploadHelper.displayName = "FileUpload.Helper";

export function FileUploadItemGroup(props: FileUploadItemGroupProps) {
  return <FileUploadPrimitive.ItemGroup {...props} />;
}
FileUploadItemGroup.displayName = "FileUpload.ItemGroup";

export function FileUploadList({ className, ...rest }: FileUploadListProps) {
  const fileUpload = useFileUpload();

  const files = fileUpload.acceptedFiles;

  if (files.length === 0) {
    return null;
  }

  return (
    <FileUploadItemGroup className={fileUploadInline3Variants()}>
      {files.map((file, index) => {
        const isImage = file.type.startsWith("image/");

        const key = `${file.name}-${index}`;

        const extension = file.name.split(".").pop();

        return (
          <FileUploadItem
            {...rest}
            className={fileUploadInlineVariants({ className })}
            file={file}
            key={key}
          >
            <FileUploadItemPreview
              className={fileUploadInline4Variants()}
              {...(isImage ? { type: "image/*" } : { type: ".*" })}
            >
              {isImage ? (
                <FileUploadItemPreviewImage />
              ) : (
                <span className={fileUploadInline5Variants()}>{extension}</span>
              )}
            </FileUploadItemPreview>

            <div className={fileUploadInline6Variants()}>
              <FileUploadItemName />
              <FileUploadItemSize />
            </div>

            <FileUploadItemDeleteTrigger asChild className={fileUploadInline7Variants()}>
              <Button className={fileUploadInline2Variants()} size="icon-xs" variant="ghost">
                <XIcon />
              </Button>
            </FileUploadItemDeleteTrigger>
          </FileUploadItem>
        );
      })}
    </FileUploadItemGroup>
  );
}
FileUploadList.displayName = "FileUpload.List";

export function FileUploadItem({ className, ...rest }: FileUploadItemProps) {
  return <FileUploadPrimitive.Item {...rest} className={fileUploadItemVariants({ className })} />;
}
FileUploadItem.displayName = "FileUpload.Item";

export function FileUploadItemPreview({ className, ...rest }: FileUploadItemPreviewProps) {
  return (
    <FileUploadPrimitive.ItemPreview
      {...rest}
      className={fileUploadItemPreviewVariants({ className })}
    />
  );
}
FileUploadItemPreview.displayName = "FileUpload.ItemPreview";

export function FileUploadItemPreviewImage({
  className,
  ...rest
}: FileUploadItemPreviewImageProps) {
  return (
    <FileUploadPrimitive.ItemPreviewImage
      {...rest}
      className={fileUploadItemPreviewImageVariants({ className })}
    />
  );
}
FileUploadItemPreviewImage.displayName = "FileUpload.ItemPreviewImage";

export function FileUploadItemName({ className, ...rest }: FileUploadItemNameProps) {
  return (
    <FileUploadPrimitive.ItemName {...rest} className={fileUploadItemNameVariants({ className })} />
  );
}
FileUploadItemName.displayName = "FileUpload.ItemName";

export function FileUploadItemSize({ className, ...rest }: FileUploadItemSizeProps) {
  return (
    <FileUploadPrimitive.ItemSizeText
      {...rest}
      className={fileUploadItemSizeVariants({ className })}
    />
  );
}
FileUploadItemSize.displayName = "FileUpload.ItemSize";

export function FileUploadItemDeleteTrigger(props: FileUploadItemDeleteTriggerProps) {
  return <FileUploadPrimitive.ItemDeleteTrigger {...props} />;
}
FileUploadItemDeleteTrigger.displayName = "FileUpload.ItemDeleteTrigger";

export function FileUploadClearTrigger(props: FileUploadClearTriggerProps) {
  return <FileUploadPrimitive.ClearTrigger {...props} />;
}
FileUploadClearTrigger.displayName = "FileUpload.ClearTrigger";
// #endregion
