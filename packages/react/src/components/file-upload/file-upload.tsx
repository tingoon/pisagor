import { ark } from "@ark-ui/react/factory";
import { FileUpload as FileUploadPrimitive, useFileUploadContext } from "@ark-ui/react/file-upload";
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

export interface FileUploadDropzoneIconProps extends ComponentProps<typeof ark.div> {}

export interface FileUploadTitleProps extends ComponentProps<typeof ark.div> {}

export interface FileUploadDescriptionProps extends ComponentProps<typeof ark.div> {}

export interface FileUploadHelperProps extends ComponentProps<typeof ark.div> {}
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

export function FileUploadTrigger(props: FileUploadTriggerProps) {
  return <FileUploadPrimitive.Trigger {...props} />;
}

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

export function FileUploadDropzoneIcon({
  className,
  children,
  ...rest
}: FileUploadDropzoneIconProps) {
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

export function FileUploadTitle({ className, ...rest }: FileUploadTitleProps) {
  return (
    <ark.div
      {...rest}
      className={fileUploadTitleVariants({ className })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadDescription({ className, ...rest }: FileUploadDescriptionProps) {
  return (
    <ark.div
      {...rest}
      className={fileUploadTitle2Variants({ className })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadHelper({ className, ...rest }: FileUploadHelperProps) {
  return (
    <ark.div
      {...rest}
      className={fileUploadDropzoneHelperVariants({ className })}
      data-part="dropzone-helper"
      data-scope="file-upload"
    />
  );
}

export function FileUploadItemGroup(props: FileUploadItemGroupProps) {
  return <FileUploadPrimitive.ItemGroup {...props} />;
}

export function FileUploadList({ className, ...rest }: FileUploadListProps) {
  const fileUpload = useFileUploadContext();

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

export function FileUploadItem({ className, ...rest }: FileUploadItemProps) {
  return <FileUploadPrimitive.Item {...rest} className={fileUploadItemVariants({ className })} />;
}

export function FileUploadItemPreview({ className, ...rest }: FileUploadItemPreviewProps) {
  return (
    <FileUploadPrimitive.ItemPreview
      {...rest}
      className={fileUploadItemPreviewVariants({ className })}
    />
  );
}

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

export function FileUploadItemName({ className, ...rest }: FileUploadItemNameProps) {
  return (
    <FileUploadPrimitive.ItemName {...rest} className={fileUploadItemNameVariants({ className })} />
  );
}

export function FileUploadItemSize({ className, ...rest }: FileUploadItemSizeProps) {
  return (
    <FileUploadPrimitive.ItemSizeText
      {...rest}
      className={fileUploadItemSizeVariants({ className })}
    />
  );
}

export function FileUploadItemDeleteTrigger(props: FileUploadItemDeleteTriggerProps) {
  return <FileUploadPrimitive.ItemDeleteTrigger {...props} />;
}

export function FileUploadClearTrigger(props: FileUploadClearTriggerProps) {
  return <FileUploadPrimitive.ClearTrigger {...props} />;
}
// #endregion

// #region Display Names
FileUploadRoot.displayName = "FileUpload";
FileUploadTrigger.displayName = "FileUpload.Trigger";
FileUploadDropzone.displayName = "FileUpload.Dropzone";
FileUploadDropzoneIcon.displayName = "FileUpload.DropzoneIcon";
FileUploadTitle.displayName = "FileUpload.Title";
FileUploadDescription.displayName = "FileUpload.Description";
FileUploadHelper.displayName = "FileUpload.Helper";
FileUploadItemGroup.displayName = "FileUpload.ItemGroup";
FileUploadList.displayName = "FileUpload.List";
FileUploadItem.displayName = "FileUpload.Item";
FileUploadItemPreview.displayName = "FileUpload.ItemPreview";
FileUploadItemPreviewImage.displayName = "FileUpload.ItemPreviewImage";
FileUploadItemName.displayName = "FileUpload.ItemName";
FileUploadItemSize.displayName = "FileUpload.ItemSize";
FileUploadItemDeleteTrigger.displayName = "FileUpload.ItemDeleteTrigger";
FileUploadClearTrigger.displayName = "FileUpload.ClearTrigger";
// #endregion
