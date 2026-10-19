import {
  FileUpload as FileUploadPrimitive,
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
} from "@ark-ui/react";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import type {
  FileUploadItemRootContract,
  FileUploadRootContract,
} from "@pisagor/contracts";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { type MessageKey, useLocale } from "./provider/context";

// #region Context
const {
  withContext,
  withProvider,
  useStyles: useFileUpload,
} = createSlotRecipeContext({
  name: "FileUpload",
  recipe: fileUploadRecipe,
});

const { withContext: withItemContext, withProvider: withItemProvider } =
  createSlotRecipeContext({
    name: "FileUploadItem",
    recipe: fileUploadItemRecipe,
  });
// #endregion

// #region Types
type FileUploadItemRootProps = FileUploadItemProps & FileUploadItemRootContract;

type FileUploadListProps = Omit<FileUploadItemRootProps, "file">;

type FileUploadRootProps = FileUploadRootPrimitiveProps &
  FileUploadRootContract & {
    onValueChange?: (value: File[]) => void;
  };

type FileUploadDropzoneProps = FileUploadDropzonePrimitiveProps;

type FileUploadItemPreviewImageProps = ComponentProps<
  typeof FileUploadPrimitive.ItemPreviewImage
>;

type FileUploadItemDeleteTriggerProps = ComponentProps<
  typeof FileUploadPrimitive.ItemDeleteTrigger
>;

type FileUploadDropzoneIconProps = ComponentPropsWithRef<"div">;

type FileUploadTitleProps = ComponentPropsWithRef<"div">;

type FileUploadDescriptionProps = ComponentPropsWithRef<"div">;

type FileUploadHelperProps = ComponentPropsWithRef<"div">;
// #endregion

// #region Parts
const RootBase = withProvider<FileUploadRootProps>(FileUploadPrimitive.Root, {
  name: "Root",
});

function Root({
  children,
  onFileChange,
  onValueChange,
  ...rest
}: FileUploadRootProps) {
  return (
    <RootBase
      {...rest}
      onFileChange={(details) => {
        onFileChange?.(details);
        onValueChange?.(details.acceptedFiles);
      }}
    >
      {children}

      <FileUploadPrimitive.HiddenInput />
    </RootBase>
  );
}

function Trigger(props: FileUploadTriggerProps) {
  return <FileUploadPrimitive.Trigger {...props} />;
}

const Dropzone = withContext<FileUploadDropzoneProps>(
  FileUploadPrimitive.Dropzone,
  {
    name: "Dropzone",
  },
);

const DropzoneIconBase = withContext<FileUploadDropzoneIconProps>("div", {
  name: "DropzoneIcon",
});

function DropzoneIcon({ children, ...rest }: FileUploadDropzoneIconProps) {
  return (
    <DropzoneIconBase {...rest}>{children || <UploadIcon />}</DropzoneIconBase>
  );
}

const Title = withContext<FileUploadTitleProps>("div", {
  name: "Title",
});

const Description = withContext<FileUploadDescriptionProps>("div", {
  name: "Description",
});

const Helper = withContext<FileUploadHelperProps>("div", {
  name: "Helper",
  part: "dropzone-helper",
});

function ItemGroup(props: FileUploadItemGroupProps) {
  return <FileUploadPrimitive.ItemGroup {...props} />;
}

function List({
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
      <Item
        {...rest}
        className={itemSlots.listItem({ className })}
        file={file}
        key={key}
        recipe={recipe}
      >
        <ItemPreview
          {...(isImage ? { type: "image/*" } : { type: ".*" })}
          className={itemSlots.listPreview()}
        >
          {isImage ? (
            <ItemPreviewImage />
          ) : (
            <span className={itemSlots.extension()}>{extension}</span>
          )}
        </ItemPreview>

        <div className={itemSlots.content()}>
          <ItemName />
          <ItemSizeText />
          {errors?.map((code) => (
            <div className={itemSlots.error()} key={code}>
              {m(`fileUpload.error.${code}` as MessageKey) ?? code}
            </div>
          ))}
        </div>

        <ItemDeleteTrigger asChild>
          <Button
            aria-label={m("fileUpload.removeFile")}
            className={itemSlots.deleteButton()}
            size="icon-xs"
            variant="ghost"
          >
            <XIcon aria-hidden />
          </Button>
        </ItemDeleteTrigger>
      </Item>
    );
  };

  return (
    <>
      {acceptedFiles.length > 0 && (
        <ItemGroup className={slots.itemGroup()}>
          {acceptedFiles.map((file, index) =>
            renderItem(file, `${file.name}-${index}`),
          )}
        </ItemGroup>
      )}

      {rejectedFiles.length > 0 && (
        <ItemGroup className={slots.itemGroup()} type="rejected">
          {rejectedFiles.map(({ file, errors }, index) =>
            renderItem(file, `${file.name}-${index}`, errors),
          )}
        </ItemGroup>
      )}
    </>
  );
}

const Item = withItemProvider<FileUploadItemRootProps>(
  FileUploadPrimitive.Item,
  {
    name: "Item",
    slot: "base",
  },
);

const ItemPreview = withItemContext<FileUploadItemPreviewProps>(
  FileUploadPrimitive.ItemPreview,
  {
    name: "ItemPreview",
    part: "preview",
    slot: "preview",
  },
);

const ItemPreviewImage = withItemContext<FileUploadItemPreviewImageProps>(
  FileUploadPrimitive.ItemPreviewImage,
  {
    name: "ItemPreviewImage",
    part: "preview-image",
    slot: "previewImage",
  },
);

const ItemName = withItemContext<FileUploadItemNameProps>(
  FileUploadPrimitive.ItemName,
  {
    name: "ItemName",
    part: "name",
    slot: "name",
  },
);

const ItemSizeText = withItemContext<FileUploadItemSizeTextProps>(
  FileUploadPrimitive.ItemSizeText,
  {
    name: "ItemSizeText",
    slot: "sizeText",
  },
);

const ItemDeleteTrigger = withItemContext<FileUploadItemDeleteTriggerProps>(
  FileUploadPrimitive.ItemDeleteTrigger,
  {
    name: "ItemDeleteTrigger",
    part: "delete-trigger",
    slot: "deleteTrigger",
  },
);

function ClearTrigger(props: FileUploadClearTriggerProps) {
  return <FileUploadPrimitive.ClearTrigger {...props} />;
}
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

export const FileUpload = Object.assign(Root, {
  ClearTrigger,
  Description,
  Dropzone,
  DropzoneIcon,
  Helper,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  List,
  Title,
  Trigger,
});
