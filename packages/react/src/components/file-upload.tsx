import {
  FileUpload as FileUploadPrimitive,
  ark,
  useFileUploadContext,
} from "@ark-ui/react";
import type {
  FileUploadClearTriggerProps,
  FileUploadDropzoneProps as FileUploadDropzonePrimitiveProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadRootProps as FileUploadRootPrimitiveProps,
  FileUploadTriggerProps,
  PolymorphicProps,
} from "@ark-ui/react";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import type {
  FileUploadItemProps as BaseFileUploadItemProps,
  FileUploadProps as BaseFileUploadRootProps,
} from "@pisagor/props";
import {
  fileUploadItemRecipe,
  fileUploadRecipe,
  formControlZoneRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { type MessageKey, useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: FileUploadStylesContext, useStyles: useFileUpload } =
  createSlotRecipeContext({
    name: "FileUpload",
    recipe: fileUploadRecipe,
  });

const { Context: FileUploadItemStylesContext, useStyles: useFileUploadItem } =
  createSlotRecipeContext({
    name: "FileUpload",
    recipe: fileUploadItemRecipe,
  });
// #endregion

// #region Types

export interface FileUploadItemRootProps
  extends FileUploadItemProps, BaseFileUploadItemProps {}

export type FileUploadListProps = Omit<FileUploadItemRootProps, "file">;

export interface FileUploadRootProps
  extends FileUploadRootPrimitiveProps, BaseFileUploadRootProps {
  onValueChange?: (value: File[]) => void;
}

export interface FileUploadDropzoneProps extends FileUploadDropzonePrimitiveProps {
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

export type FileUploadDropzoneIconProps = ComponentPropsWithRef<"div"> &
  PolymorphicProps;

export type FileUploadTitleProps = ComponentPropsWithRef<"div"> &
  PolymorphicProps;

export type FileUploadDescriptionProps = ComponentPropsWithRef<"div"> &
  PolymorphicProps;

export type FileUploadHelperProps = ComponentPropsWithRef<"div"> &
  PolymorphicProps;
// #endregion

// #region Parts
export function FileUploadRoot({
  children,
  onFileChange,
  onValueChange,
  recipe = fileUploadRecipe,
  className,
  ...rest
}: FileUploadRootProps) {
  const slots = recipe();

  return (
    <FileUploadStylesContext value={{ slots, variants: {} as never }}>
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
    </FileUploadStylesContext>
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
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };
  const { slots } = useFileUpload();

  return (
    <FileUploadPrimitive.Dropzone
      {...rest}
      {...controlProps}
      className={cn(
        formControlZoneRecipe({ ...shellArgs }),
        slots.dropzone(),
        className,
      )}
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

export function FileUploadDescription({
  className,
  ...rest
}: FileUploadDescriptionProps) {
  const { slots } = useFileUpload();

  return (
    <ark.div
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="file-upload"
    />
  );
}

export function FileUploadHelper({
  className,
  ...rest
}: FileUploadHelperProps) {
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

export function FileUploadList({
  className,
  recipe = fileUploadItemRecipe,
  ...rest
}: FileUploadListProps) {
  const { m } = useLocale();
  const fileUpload = useFileUploadContext();
  const { slots } = useFileUpload();
  const itemSlots = recipe();

  const { acceptedFiles, rejectedFiles } = fileUpload;

  if (acceptedFiles.length === 0 && rejectedFiles.length === 0) {
    return null;
  }

  const renderItem = (file: File, key: string, errors?: string[]) => {
    const isImage = file.type.startsWith("image/");

    const extension = file.name.split(".").pop();

    return (
      <FileUploadItem
        {...rest}
        className={itemSlots.listItem({ className })}
        file={file}
        key={key}
        recipe={recipe}
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
          {errors?.map((code) => (
            <div className={itemSlots.error()} key={code}>
              {m(`fileUpload.error.${code}` as MessageKey) ?? code}
            </div>
          ))}
        </div>

        <FileUploadItemDeleteTrigger asChild>
          <Button
            aria-label={m("fileUpload.removeFile")}
            className={itemSlots.deleteButton()}
            size="icon-xs"
            variant="ghost"
          >
            <XIcon aria-hidden />
          </Button>
        </FileUploadItemDeleteTrigger>
      </FileUploadItem>
    );
  };

  return (
    <>
      {acceptedFiles.length > 0 && (
        <FileUploadItemGroup className={slots.itemGroup()}>
          {acceptedFiles.map((file, index) =>
            renderItem(file, `${file.name}-${index}`),
          )}
        </FileUploadItemGroup>
      )}

      {rejectedFiles.length > 0 && (
        <FileUploadItemGroup className={slots.itemGroup()} type="rejected">
          {rejectedFiles.map(({ file, errors }, index) =>
            renderItem(file, `${file.name}-${index}`, errors),
          )}
        </FileUploadItemGroup>
      )}
    </>
  );
}

export function FileUploadItem({
  children,
  recipe = fileUploadItemRecipe,
  className,
  ...rest
}: FileUploadItemRootProps) {
  const slots = recipe();

  return (
    <FileUploadItemStylesContext value={{ slots, variants: {} as never }}>
      <FileUploadPrimitive.Item {...rest} className={slots.base({ className })}>
        {children}
      </FileUploadPrimitive.Item>
    </FileUploadItemStylesContext>
  );
}

export function FileUploadItemPreview({
  className,
  ...rest
}: FileUploadItemPreviewProps) {
  const { slots } = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemPreview
      {...rest}
      className={slots.preview({ className })}
    />
  );
}

export function FileUploadItemPreviewImage({
  className,
  ...rest
}: FileUploadItemPreviewImageProps) {
  const { slots } = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemPreviewImage
      {...rest}
      className={slots.previewImage({ className })}
    />
  );
}

export function FileUploadItemName({
  className,
  ...rest
}: FileUploadItemNameProps) {
  const { slots } = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemName
      {...rest}
      className={slots.name({ className })}
    />
  );
}

export function FileUploadItemSize({
  className,
  ...rest
}: FileUploadItemSizeProps) {
  const { slots } = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemSizeText
      {...rest}
      className={slots.size({ className })}
    />
  );
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

export type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadTriggerProps,
} from "@ark-ui/react";

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
