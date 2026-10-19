import { FileIcon } from "@phosphor-icons/react";
import type { FileContract, FileRootContract } from "@pisagor/contracts";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Format } from "./format";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
// #endregion

// #region Parts
export const FileRoot = withProvider<FileRootContract>("div", {
  name: "Root",
  slot: "base",
});

export function FileMedia({
  variant = "icon",
  children,
  className,
  ...rest
}: ComponentPropsWithRef<"div"> & FileVariantProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.media({ className, variant })}
      data-part="media"
      data-scope="file"
      data-variant={variant}
    >
      {children ?? <FileIcon />}
    </div>
  );
}

export const FileContent = withContext("div", {
  name: "Content",
  slot: "content",
});

export const FileName = withContext("div", {
  name: "Name",
  slot: "name",
});

export const FileMeta = withContext("div", {
  name: "Meta",
  slot: "meta",
});

export function FileSize({
  value,
  className,
  ...rest
}: Omit<ComponentPropsWithRef<"div">, "children"> & {
  value: number;
}) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.size({ className })}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={value} />
    </div>
  );
}

export const FileActions = withContext("div", {
  name: "Actions",
  slot: "actions",
});
// #endregion

// #region Types
export type FileRootProps = ComponentProps<typeof FileRoot>;
export type FileMediaProps = ComponentProps<typeof FileMedia>;
export type FileNameProps = ComponentProps<typeof FileName>;
export type FileMetaProps = ComponentProps<typeof FileMeta>;
export type FileSizeProps = ComponentProps<typeof FileSize>;
export type FileActionsProps = ComponentProps<typeof FileActions>;
export type FileContentProps = ComponentProps<typeof FileContent>;

export interface FileProps
  extends Omit<FileRootProps, "children">, FileContract {
  actions?: ReactNode;
  media?: ReactNode;
  meta?: ReactNode;
  name: ReactNode;
  size?: number;
}
// #endregion

// #region Shorthand
export function FileShorthand({
  size,
  name,
  actions,
  media,
  meta,
  ...rest
}: FileProps) {
  return (
    <FileRoot {...rest}>
      <FileMedia>{media}</FileMedia>

      <FileContent>
        <FileName>{name}</FileName>

        {meta ? <FileMeta>{meta}</FileMeta> : null}

        {size !== undefined ? <FileSize value={size} /> : null}
      </FileContent>

      {actions ? <FileActions>{actions}</FileActions> : null}
    </FileRoot>
  );
}

FileMedia.displayName = "File.Media";
FileSize.displayName = "File.Size";
// #endregion

const fileParts = {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
};

export const FileItem = Object.assign(FileShorthand, fileParts);

/** @deprecated Use `FileItem`. `File` shadows the global `File` constructor. */
export const File = Object.assign(FileShorthand, fileParts);
