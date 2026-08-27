import { ark } from "@ark-ui/react/factory";
import { FileUpload as FileUploadPrimitive, useFileUploadContext } from "@ark-ui/react/file-upload";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import { fileUploadItemVariants, fileUploadVariants } from "@pisagor/recipes/file-upload";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlZoneVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import { Button } from "../button";
import {
  FileUploadContext,
  FileUploadItemContext,
  useFileUpload,
  useFileUploadItem,
} from "./file-upload.context";

// #region Types
export interface FileUploadListProps
  extends Omit<ComponentProps<typeof FileUploadPrimitive.Item>, "file"> {}

export interface FileUploadRootProps extends ComponentProps<typeof FileUploadPrimitive.Root> {
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
  ...rest
}: FileUploadRootProps) {
  const slots = useMemo(() => fileUploadVariants(), []);

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
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const { slots } = useFileUpload();

  return (
    <FileUploadPrimitive.Dropzone
      {...rest}
      {...controlProps}
      className={cn(formControlZoneVariants({ ...shellArgs }), slots.dropzone(), className)}
    />
  );
}

export function FileUploadDropzoneIcon({
  className,
  children,
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
  const itemSlots = fileUploadItemVariants();

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
              className={itemSlots.listPreview()}
              {...(isImage ? { type: "image/*" } : { type: ".*" })}
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

export function FileUploadItem({ className, children, ...rest }: FileUploadItemProps) {
  const slots = useMemo(() => fileUploadItemVariants(), []);

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
