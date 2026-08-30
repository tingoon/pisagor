import { ark } from "@ark-ui/react/factory";
import type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadDropzoneProps as FileUploadPrimitiveDropzoneProps,
  FileUploadRootProps as FileUploadPrimitiveRootProps,
  FileUploadTriggerProps,
} from "@ark-ui/react/file-upload";
import { FileUpload as FileUploadPrimitive, useFileUploadContext } from "@ark-ui/react/file-upload";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes/file-upload";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { Button } from "../button";
import {
  FileUploadContext,
  FileUploadItemContext,
  useFileUpload,
  useFileUploadItem,
} from "./file-upload.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

export type FileUploadListProps = Omit<FileUploadItemProps, "file">;

export interface FileUploadRootProps extends FileUploadPrimitiveRootProps {
  onValueChange?: (value: File[]) => void;
}

export interface FileUploadDropzoneProps extends FileUploadPrimitiveDropzoneProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}

export type FileUploadItemPreviewImageProps = ComponentProps<
  typeof FileUploadPrimitive.ItemPreviewImage
>;

export type FileUploadItemSizeProps = FileUploadItemSizeTextProps;

export type FileUploadItemDeleteTriggerProps = ComponentProps<
  typeof FileUploadPrimitive.ItemDeleteTrigger
>;

export type FileUploadDropzoneIconProps = ComponentProps<typeof ark.div>;

export type FileUploadTitleProps = ComponentProps<typeof ark.div>;

export type FileUploadDescriptionProps = ComponentProps<typeof ark.div>;

export type FileUploadHelperProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function FileUploadRoot({
  children,
  onFileChange,
  onValueChange,
  className,
  ...rest
}: FileUploadRootProps) {
  const slots = fileUploadRecipe();

  return (
    <FileUploadContext value={{ slots }}>
      <FileUploadPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        onFileChange={(details) => {
          onFileChange?.(details);
          onValueChange?.(details.acceptedFiles);
        }}
      >
        {children}

        <FileUploadPrimitive.HiddenInput />
      </FileUploadPrimitive.Root>
    </FileUploadContext>
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
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };
  const { slots } = useFileUpload();

  return (
    <FileUploadPrimitive.Dropzone
      {...rest}
      {...controlProps}
      className={cn(formControlZoneRecipe({ ...shellArgs }), slots.dropzone(), className)}
    />
  );
}

export function FileUploadDropzoneIcon({
  children,
  className,
  ...rest
}: FileUploadDropzoneIconProps) {
  const { slots } = useFileUpload();

  return (
    <ark.div
      {...rest}
      className={slots.dropzoneIcon({ className })}
      data-part="dropzone-icon"
      data-scope="file-upload"
    >
      {children || <UploadIcon />}
    </ark.div>
  );
}

export function FileUploadTitle({ className, ...rest }: FileUploadTitleProps) {
  const { slots } = useFileUpload();

  return (
    <ark.div
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadDescription({ className, ...rest }: FileUploadDescriptionProps) {
  const { slots } = useFileUpload();

  return (
    <ark.div
      {...rest}
      className={slots.description({ className })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadHelper({ className, ...rest }: FileUploadHelperProps) {
  const { slots } = useFileUpload();

  return (
    <ark.div
      {...rest}
      className={slots.helper({ className })}
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
  const { slots } = useFileUpload();
  const itemSlots = fileUploadItemRecipe();

  const files = fileUpload.acceptedFiles;

  if (files.length === 0) {
    return null;
  }

  return (
    <FileUploadItemGroup className={slots.itemGroup()}>
      {files.map((file, index) => {
        const isImage = file.type.startsWith("image/");

        const key = `${file.name}-${index}`;

        const extension = file.name.split(".").pop();

        return (
          <FileUploadItem
            {...rest}
            className={itemSlots.listItem({ className })}
            file={file}
            key={key}
          >
            <FileUploadItemPreview
              {...(isImage ? { type: "image/*" } : { type: ".*" })}
              className={itemSlots.listPreview()}
            >
              {isImage ? (
                <FileUploadItemPreviewImage />
              ) : (
                <span className={itemSlots.extension()}>{extension}</span>
              )}
            </FileUploadItemPreview>

            <div className={itemSlots.content()}>
              <FileUploadItemName />
              <FileUploadItemSize />
            </div>

            <FileUploadItemDeleteTrigger asChild>
              <Button
                aria-label="Remove file"
                className={itemSlots.deleteButton()}
                size="icon-xs"
                variant="ghost"
              >
                <XIcon aria-hidden />
              </Button>
            </FileUploadItemDeleteTrigger>
          </FileUploadItem>
        );
      })}
    </FileUploadItemGroup>
  );
}

export function FileUploadItem({ children, className, ...rest }: FileUploadItemProps) {
  const slots = fileUploadItemRecipe();

  return (
    <FileUploadItemContext value={{ slots }}>
      <FileUploadPrimitive.Item {...rest} className={slots.base({ className })}>
        {children}
      </FileUploadPrimitive.Item>
    </FileUploadItemContext>
  );
}

export function FileUploadItemPreview({ className, ...rest }: FileUploadItemPreviewProps) {
  const { slots } = useFileUploadItem();

  return <FileUploadPrimitive.ItemPreview {...rest} className={slots.preview({ className })} />;
}

export function FileUploadItemPreviewImage({
  className,
  ...rest
}: FileUploadItemPreviewImageProps) {
  const { slots } = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemPreviewImage {...rest} className={slots.previewImage({ className })} />
  );
}

export function FileUploadItemName({ className, ...rest }: FileUploadItemNameProps) {
  const { slots } = useFileUploadItem();

  return <FileUploadPrimitive.ItemName {...rest} className={slots.name({ className })} />;
}

export function FileUploadItemSize({ className, ...rest }: FileUploadItemSizeProps) {
  const { slots } = useFileUploadItem();

  return <FileUploadPrimitive.ItemSizeText {...rest} className={slots.size({ className })} />;
}

export function FileUploadItemDeleteTrigger({
  className,
  ...rest
}: FileUploadItemDeleteTriggerProps) {
  const { slots } = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemDeleteTrigger
      {...rest}
      className={slots.deleteTrigger({ className })}
    />
  );
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
