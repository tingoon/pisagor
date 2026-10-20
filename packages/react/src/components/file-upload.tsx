import {
  FileUpload as FileUploadPrimitive,
  useFileUploadContext,
} from "@ark-ui/react";
import type {
  FileUploadClearTriggerProps,
  FileUploadDropzoneProps,
  FileUploadItemDeleteTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps as FileUploadItemPrimitiveProps,
  FileUploadItemSizeTextProps,
  FileUploadLabelProps,
  FileUploadRootProps as FileUploadRootPrimitiveProps,
  FileUploadTriggerProps,
} from "@ark-ui/react";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import type {
  FileUploadContract,
  FileUploadItemRootContract,
  FileUploadRootContract,
} from "@pisagor/contracts";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { type MessageKey, useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
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
export type FileUploadRootProps = FileUploadRootPrimitiveProps &
  FileUploadRootContract & {
    /** Called with the accepted files whenever the selection changes. */
    onValueChange?: (value: File[]) => void;
  };

export type FileUploadItemProps = FileUploadItemPrimitiveProps &
  FileUploadItemRootContract;

export interface FileUploadProps
  extends Omit<FileUploadRootProps, "children" | "title">, FileUploadContract {
  /** Content rendered as a clear-all trigger (via `asChild`). */
  clearTrigger?: ReactNode;
  /** Secondary text in the dropzone. */
  description?: ReactNode;
  /**
   * Whether to render the dropzone. When `false`, only `trigger` and the file
   * list render.
   *
   * @defaultValue true
   */
  dropzone?: boolean;
  /** Helper text at the bottom of the dropzone. */
  helper?: ReactNode;
  /**
   * Dropzone icon. Pass `null` to hide it.
   *
   * @defaultValue <UploadIcon />
   */
  icon?: ReactNode;
  /** Visible label rendered above the dropzone. */
  label?: ReactNode;
  /**
   * Whether to render the accepted and rejected file list.
   *
   * @defaultValue true
   */
  showList?: boolean;
  /** Primary text in the dropzone. */
  title?: ReactNode;
  /** Content rendered as the file picker trigger (via `asChild`). */
  trigger?: ReactNode;
}

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
};
// #endregion

// #region Parts
const RootBase = withProvider<FileUploadRootPrimitiveProps>(
  FileUploadPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; renders the hidden input and passes accepted files to `onValueChange`. */
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

const Label = withContext<FileUploadLabelProps>(FileUploadPrimitive.Label, {
  name: "Label",
});

const Dropzone = withContext<FileUploadDropzoneProps>(
  FileUploadPrimitive.Dropzone,
  { name: "Dropzone" },
);

const Trigger = withContext<FileUploadTriggerProps>(
  FileUploadPrimitive.Trigger,
  { name: "Trigger" },
);

const ClearTriggerBase = withContext<FileUploadClearTriggerProps>(
  FileUploadPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

/** Clear trigger with a localized default `aria-label`. */
function ClearTrigger(props: FileUploadClearTriggerProps) {
  const { m } = useLocale();

  return (
    <ClearTriggerBase aria-label={m("fileUpload.clearFiles")} {...props} />
  );
}

const ItemGroup = withContext<FileUploadItemGroupProps>(
  FileUploadPrimitive.ItemGroup,
  { name: "ItemGroup" },
);

const Item = withItemProvider<FileUploadItemProps>(FileUploadPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const ItemPreview = withItemContext<FileUploadItemPreviewProps>(
  FileUploadPrimitive.ItemPreview,
  { name: "ItemPreview", slot: "preview" },
);

const ItemPreviewImage = withItemContext<FileUploadItemPreviewImageProps>(
  FileUploadPrimitive.ItemPreviewImage,
  { name: "ItemPreviewImage", slot: "previewImage" },
);

const ItemName = withItemContext<FileUploadItemNameProps>(
  FileUploadPrimitive.ItemName,
  { name: "ItemName", slot: "name" },
);

const ItemSizeText = withItemContext<FileUploadItemSizeTextProps>(
  FileUploadPrimitive.ItemSizeText,
  { name: "ItemSizeText", slot: "sizeText" },
);

const ItemDeleteTriggerBase = withItemContext<FileUploadItemDeleteTriggerProps>(
  FileUploadPrimitive.ItemDeleteTrigger,
  { name: "ItemDeleteTrigger", slot: "deleteTrigger" },
);

/** Item delete trigger with a localized default `aria-label`. */
function ItemDeleteTrigger(props: FileUploadItemDeleteTriggerProps) {
  const { m } = useLocale();

  return (
    <ItemDeleteTriggerBase aria-label={m("fileUpload.removeFile")} {...props} />
  );
}
// #endregion

// #region Shorthand
function FileList({
  classNames,
  itemClassNames,
}: Pick<FileUploadProps, "classNames" | "itemClassNames">) {
  const { m } = useLocale();
  const { acceptedFiles, rejectedFiles } = useFileUploadContext();
  const itemSlots = fileUploadItemRecipe();

  const renderItem = (file: File, key: string, errors?: string[]) => {
    const isImage = file.type.startsWith("image/");

    return (
      <Item
        className={itemSlots.listItem({ className: itemClassNames?.listItem })}
        file={file}
        key={key}
      >
        <ItemPreview
          className={itemSlots.listPreview({
            className: itemClassNames?.listPreview,
          })}
          type={isImage ? "image/*" : ".*"}
        >
          {isImage ? (
            <ItemPreviewImage className={itemClassNames?.previewImage} />
          ) : (
            <span
              className={itemSlots.extension({
                className: itemClassNames?.extension,
              })}
            >
              {file.name.split(".").pop()}
            </span>
          )}
        </ItemPreview>
        <div
          className={itemSlots.content({ className: itemClassNames?.content })}
        >
          <ItemName className={itemClassNames?.name} />
          <ItemSizeText className={itemClassNames?.sizeText} />
          {errors?.map((code) => (
            <div
              className={itemSlots.error({ className: itemClassNames?.error })}
              key={code}
            >
              {m(`fileUpload.error.${code}` as MessageKey) ?? code}
            </div>
          ))}
        </div>
        <ItemDeleteTrigger asChild className={itemClassNames?.deleteTrigger}>
          <Button
            className={itemSlots.deleteButton({
              className: itemClassNames?.deleteButton,
            })}
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
      {acceptedFiles.length > 0 ? (
        <ItemGroup className={classNames?.itemGroup}>
          {acceptedFiles.map((file, index) =>
            renderItem(file, `${file.name}-${index}`),
          )}
        </ItemGroup>
      ) : null}
      {rejectedFiles.length > 0 ? (
        <ItemGroup className={classNames?.itemGroup} type="rejected">
          {rejectedFiles.map(({ errors, file }, index) =>
            renderItem(file, `${file.name}-${index}`, errors),
          )}
        </ItemGroup>
      ) : null}
    </>
  );
}

function DropzoneText({
  className,
  children,
  slot,
}: {
  children: ReactNode;
  className?: string;
  slot: "description" | "dropzoneIcon" | "helper" | "title";
}) {
  const { slots } = useStyles();

  return <div className={slots[slot]({ className })}>{children}</div>;
}

export function FileUploadShorthand({
  classNames,
  clearTrigger,
  description,
  dropzone = true,
  helper,
  icon = <UploadIcon />,
  itemClassNames,
  label,
  showList = true,
  title,
  trigger,
  ...rest
}: FileUploadProps) {
  const triggerNode = trigger ? (
    <Trigger asChild className={classNames?.trigger}>
      {trigger}
    </Trigger>
  ) : null;

  return (
    <Root {...rest}>
      {label ? <Label className={classNames?.label}>{label}</Label> : null}
      {clearTrigger ? (
        <ClearTrigger asChild className={classNames?.clearTrigger}>
          {clearTrigger}
        </ClearTrigger>
      ) : null}
      {dropzone ? (
        <Dropzone className={classNames?.dropzone}>
          {icon ? (
            <DropzoneText
              className={classNames?.dropzoneIcon}
              slot="dropzoneIcon"
            >
              {icon}
            </DropzoneText>
          ) : null}
          {title ? (
            <DropzoneText className={classNames?.title} slot="title">
              {title}
            </DropzoneText>
          ) : null}
          {description ? (
            <DropzoneText
              className={classNames?.description}
              slot="description"
            >
              {description}
            </DropzoneText>
          ) : null}
          {triggerNode}
          {helper ? (
            <DropzoneText className={classNames?.helper} slot="helper">
              {helper}
            </DropzoneText>
          ) : null}
        </Dropzone>
      ) : (
        triggerNode
      )}
      {showList ? (
        <FileList classNames={classNames} itemClassNames={itemClassNames} />
      ) : null}
    </Root>
  );
}
// #endregion

// #region Display Names
Root.displayName = "FileUpload.Root";
ClearTrigger.displayName = "FileUpload.ClearTrigger";
ItemDeleteTrigger.displayName = "FileUpload.ItemDeleteTrigger";
FileUploadShorthand.displayName = "FileUpload";
// #endregion

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
